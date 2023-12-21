"use client"
import React, { useState } from 'react'
import { UploadArrayType } from '../commen/CommenName'
import { setLoadingState } from '@/redux/actions/masterSlice'
import { videopayload } from '../commen/CommenTypeDefination'
import { useAppDispatch } from '@/redux/hook/hook'
import { UploadIamgeList } from '@/utils/types'
import { UploadVideoList } from './Videoservice'
import VideoPlayer from '../component/videoComponent/VideoComponent'
import DownloadImage from '../component/DownloadButton'

function Video() {
    const arr = UploadArrayType
    const dispatch = useAppDispatch()
    const [videoList, setVideoList] = useState<UploadIamgeList[] | []>([])
    const handelFilter = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        try {
            dispatch(setLoadingState(true))
            const payload: videopayload = { type: e.target.value, fileType: "video" }
            const res = await UploadVideoList(payload)
            dispatch(setLoadingState(false))
            // setSelectedType(e.target.value)
            console.log(res)
            setVideoList(res.data)
        } catch (error) {
            dispatch(setLoadingState(false))

        }
    }
    return (
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
            <div>
                <div className='grid lg:grid-cols-6 md:grid-cols-8 sm:grid-cols-10 xs:grid-cols-12 gap-3 overflow-y-auto' >
                    {videoList.map((val: UploadIamgeList, i) => (
                        <div key={i} className='p-2'>
                            <DownloadImage publicId={val.publicId} type={val.fileType} />
                            <VideoPlayer src={val.publicId}
                                width={""} // Set your desired width
                                height={""} // Set your desired height
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Video