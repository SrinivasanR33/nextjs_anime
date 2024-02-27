"use client"
import React, { useEffect, useRef, useState } from 'react'
import { UploadArrayType, selectArr } from '../commen/CommenName'
import { DeleteUpload, UploadImageList } from './imageListService'
import { UploadIamgeList } from '@/utils/types'
import MyImage from '../component/ImageComponent/CustomImage'
import { SelecfieldArr, payloadPaginationData } from '../commen/CommenTypeDefination'
import { useAppDispatch, useAppSelector } from '@/redux/hook/hook'
import { setFullScreenState, setLoadingState } from '@/redux/actions/masterSlice'
import { ImageLoading } from '../commen/LoadingComponets'
import { CreateUploadMasterAPI } from '../masters/uploadMasters/UploadMasterService'
import SelectField from '../component/SelectComponent'
import { FiDelete } from 'react-icons/fi'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import ImageDownload from '../component/ImageDownload'


interface pageInfo {
    page: number;
    pageSize: number;
    totalCount: number;
}

function ImageList() {
    const arr = UploadArrayType
    const { status, data: session } = useSession()
    const admin = session?.user?.name ? false : true
    const [imageList, setImageList] = useState<UploadIamgeList[] | []>([])
    const [selectedType, setSelectedType] = useState<string>()
    const [pageInfo, setPageInfo] = useState<pageInfo>({
        page: 1, pageSize: 25, totalCount: 0
    })
    const dispatch = useAppDispatch()
    const listInnerRef = useRef(null)
    const { tableLoading } = useAppSelector((state) => state.masterReducer)
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
    const [masterList, setMasterList] = useState<SelecfieldArr[]>([])
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
    };

    const closeFullscreen = () => {
        setFullscreenImage(null);
        var doc = window.document;
        if (doc.fullscreenElement) {
            // Exit fullscreen
            dispatch(setFullScreenState(false))
            doc.exitFullscreen();
        }
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
            if (pageInfo.totalCount !== imageList.length) {
                setImageList((per) => [...res.data])
            }
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
    const handelDelete = async (id: string) => {
        const deleteAPI = await DeleteUpload({ _id: id })
    }
    const handelGetAPI = async () => {
        const res = await CreateUploadMasterAPI()
        if (res) {
            const master = res?.data
            const selectValue = selectArr({ arr: master, valueKey: "codeName", labelKey: "name" })
            setMasterList(selectValue)
        } else {
            setMasterList([])
        }
    }
    useEffect(() => {
        handelGetAPI()
    }, [])
    return (
        <>
            {!fullscreenImage ? <>
                <div>
                    <div className='flex gap-7 p-2'>
                        <div>
                            <SelectField options={masterList} label='name' onChange={handelFilter} />
                        </div>
                    </div>
                        <div className='flex-wrap mx-[1rem]'>
                        Discover stunning images, download with ease, and enjoy immersive full-screen viewing with just a click.
                            </div>
                    <div ref={listInnerRef} onScroll={onScroll} className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-12 gap-3 overflow-y-auto' style={{ maxHeight: '750px' }}>
                        {tableLoading ?
                            <ImageLoading num={24} />
                            :
                            <>
                                {imageList.map((val: UploadIamgeList, i) => (
                                    <div key={i} className='p-2'>
                                        <div className='flex'>
                                            <ImageDownload publicId={val.publicId} type={""} />
                                            {/* {admin ? <button className='btn btn-ghost  btn-square btn-xs' onClick={() => handelDelete(val._id)}><FiDelete /></button> : null} */}
                                        </div>
                                        <MyImage src={val.secureUrl}
                                            width={500} // Set your desired width
                                            height={300} // Set your desired height
                                            priority={true}
                                            className='w-[500px] h-[200px]'
                                            quality={85}
                                            onClick={() => openFullscreen(val.secureUrl)}
                                            alt='image' />
                                        <div><label className=''>{val.des}</label></div>
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