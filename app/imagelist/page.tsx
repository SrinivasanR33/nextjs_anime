"use client"
import React, { useState } from 'react'
import { UploadArrayType } from '../commen/CommenName'
import { UploadImageList } from './imageListService'
import CloudinaryImage from '../component/ImageComponent/CloudinaryImage'
import DownloadButton from '../component/DownloadButton'
import DownloadImage from '../component/DownloadButton'
import { UploadIamgeList } from '@/utils/types'
import MyImage from '../component/ImageComponent/CustomImage'
import { payloadPaginationData } from '../commen/CommenTypeDefination'
import { useAppDispatch } from '@/redux/hook/hook'
import { setFullScreenState } from '@/redux/actions/masterSlice'




function ImageList() {
    const arr = UploadArrayType
    const [imageList, setImageList] = useState([])
    const dispatch = useAppDispatch()
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
    const handelFilter = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const payload: payloadPaginationData = { type: e.target.value, page: 1, pageSize: 5 }
        const res = await UploadImageList(payload)
        setImageList(res.data)
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
                        {/* <div>
                <button className='btn btn-accent btn-sm'>filter</button>
            </div> */}
                    </div>
                    <div className='grid lg:grid-cols-6 md:grid-cols-8 sm:grid-cols-10 xs:grid-cols-12'>
                        {imageList.map((val: UploadIamgeList, i) => (
                            <div key={i} className='p-2'>
                                <DownloadImage publicId={val.publicId} />
                                <MyImage src={val.secureUrl}
                                    width={500} // Set your desired width
                                    height={300} // Set your desired height
                                    priority={true}
                                    quality={85}
                                    onClick={() => openFullscreen(val.secureUrl)}
                                    alt='image' />
                            </div>
                        ))}
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