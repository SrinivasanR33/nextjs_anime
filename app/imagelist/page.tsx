"use client"
import React, { useEffect, useRef, useState } from 'react'
import { UploadArrayType } from '../commen/CommenName'
import { UploadImageList } from './imageListService'
import CloudinaryImage from '../component/ImageComponent/CloudinaryImage'
import DownloadButton from '../component/DownloadButton'
import DownloadImage from '../component/DownloadButton'
import { UploadIamgeList } from '@/utils/types'
import MyImage from '../component/ImageComponent/CustomImage'
import { payloadPaginationData } from '../commen/CommenTypeDefination'
import { useAppDispatch, useAppSelector } from '@/redux/hook/hook'
import { setFullScreenState, setLoadingState } from '@/redux/actions/masterSlice'
import { ImageLoading } from '../commen/LoadingComponets'


interface pageInfo {
    page: number;
    pageSize: number;
    totalCount: number;
}

function ImageList() {
    const arr = UploadArrayType
    const [imageList, setImageList] = useState<UploadIamgeList[] | []>([])
    const [selectedType, setSelectedType] = useState<string>()
    const [pageInfo, setPageInfo] = useState<pageInfo>({
        page: 1, pageSize: 25, totalCount: 0
    })
    const dispatch = useAppDispatch()
    const listInnerRef = useRef(null)
    const { tableLoading } = useAppSelector((state) => state.masterReducer)
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
    const handelFilter = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        try {
            dispatch(setLoadingState(true))
            const payload: payloadPaginationData = { type: e.target.value, page: pageInfo.page, pageSize: pageInfo.pageSize }
            const res = await UploadImageList(payload)
            dispatch(setLoadingState(false))
            setSelectedType(e.target.value)
            setPageInfo((per: pageInfo) => ({ ...per, page: res.page, pageSize: res.pageSize, totalCount: res.totalCount }))
            setImageList(res.data)
        } catch (error) {
            dispatch(setLoadingState(false))

        }
    }
    const openFullscreen = (publicId: string) => {
        setFullscreenImage(publicId);
        const element = document.documentElement;

        if (element.requestFullscreen) {
            dispatch(setFullScreenState(true))
            element.requestFullscreen();
        }
        // else if (element.mozRequestFulscreen) {
        //     element.mozRequestFullScreen();
        // } else if (element.webkitRequestFullscreen) {
        //     element.webkitRequestFullscreen();
        // } else if (element.msRequestFullscreen) {
        //     element.msRequestFullscreen();
        // }
    };

    const closeFullscreen = () => {
        setFullscreenImage(null);
        var doc = window.document;
        if (doc.fullscreenElement) {
            // Exit fullscreen
            dispatch(setFullScreenState(false))
            doc.exitFullscreen();
        }
        // else if (document.mozCancelFullScreen) {
        //     document.mozCancelFullScreen();
        // } else if (document.webkitExitFullscreen) {
        //     document.webkitExitFullscreen();
        // } else if (document.msExitFullscreen) {
        //     document.msExitFullscreen();
        // }
    };
    const getScreenDimensions = () => {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    };
    const onScrollFunction = async () => {
        try {
            const payload: payloadPaginationData = { type: selectedType, page: pageInfo.page, pageSize: pageInfo.pageSize }
            const res = await UploadImageList(payload)
            setPageInfo((per: pageInfo) => ({ ...per, page: res.page, pageSize: res.pageSize + 1, totalCount: res.totalCount }))
            setImageList((per) => [...res.data, ...per])
        } catch (error) {

        }
    };
    const onScroll = () => {
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

            if (scrollTop + clientHeight === scrollHeight) {
                // if (pageInfo?.hasNext) {
                onScrollFunction();
                // }
            }
        }
    };
    return (
        <>
            {!fullscreenImage ? <>
                <div>
                    <div className='flex gap-7 p-2'>
                        {/* {folderNameandId} */}
                        <div>
                            <select className="select select-accent w-full max-w-xs" onChange={handelFilter}>
                                <option value={""}>Select Folder name</option>
                                {arr.map((val, i) => (
                                    <option key={i} value={val.name}>{val.name}</option>
                                ))}

                            </select>
                        </div>
                    </div>
                    <div ref={listInnerRef} onScroll={onScroll} className='grid lg:grid-cols-6 md:grid-cols-8 sm:grid-cols-10 xs:grid-cols-12 gap-3 overflow-y-auto' style={{ maxHeight: '750px' }}>
                        {tableLoading ?
                            <ImageLoading num={24} />
                            :
                            <>
                                {imageList.map((val: UploadIamgeList, i) => (
                                    <div key={i} className='p-2'>
                                        <DownloadImage publicId={val.publicId} type={""} />
                                        <MyImage src={val.secureUrl}
                                            width={500} // Set your desired width
                                            height={300} // Set your desired height
                                            priority={true}
                                            quality={85}
                                            onClick={() => openFullscreen(val.secureUrl)}
                                            alt='image' />
                                    </div>
                                ))}
                            </>
                        }
                    </div>
                </div>
            </> : <><div className='fullscreen-overlay' onClick={closeFullscreen}>
                <MyImage
                    src={fullscreenImage}
                    width={getScreenDimensions().width}
                    height={getScreenDimensions().height}
                    priority={true}
                    quality={85}
                    alt='fullscreen-image'
                />
            </div></>
            }
        </>


    )
}

export default ImageList