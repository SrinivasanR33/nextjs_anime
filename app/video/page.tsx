"use client"
import React, { useEffect, useRef, useState } from 'react'
import { UploadArrayType, selectArr } from '../commen/CommenName'
import { setLoadingState } from '@/redux/actions/masterSlice'
import { SelecfieldArr, videopayload } from '../commen/CommenTypeDefination'
import { useAppDispatch } from '@/redux/hook/hook'
import { UploadIamgeList } from '@/utils/types'
import { UploadVideoList } from './Videoservice'
import VideoPlayer from '../component/videoComponent/VideoComponent'
import DownloadImage from '../component/DownloadButton'
import { CreateUploadMasterAPI } from '../masters/uploadMasters/UploadMasterService'
import SelectField from '../component/SelectComponent'

function Video() {
    const arr = UploadArrayType
    const dispatch = useAppDispatch()
    const [masterList, setMasterList] = useState<SelecfieldArr[]>([])
    const [videoList, setVideoList] = useState<UploadIamgeList[] | []>([])
    const [currentVideo, setCurrentVideo] = useState<string | null>(null);
    const currentPlayingVideoRef = useRef<HTMLVideoElement | null>(null);

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
    const handleVideoClick = (src: string) => {
        console.log(src,"src")
        setCurrentVideo(src); // Set the current video when it's clicked
    };
    const handleVideoPlay = (videoElement: HTMLVideoElement) => {
        // If there's a currently playing video, pause it
        if (currentPlayingVideoRef.current) {
          currentPlayingVideoRef.current.pause();
        }
    
        // Set the current playing video reference
        currentPlayingVideoRef.current = videoElement;
      };
    return (
        <div>
            <div className='flex gap-7 p-2'>
                {/* {folderNameandId} */}
                <div>
                    <SelectField options={masterList} label='name' onChange={handelFilter} />
                    {/* <select className="select select-accent w-full max-w-xs" onChange={handelFilter}>
                        <option value={""}>Select Folder name</option>
                        {arr.map((val, i) => (
                            <option key={i} value={val.name}>{val.name}</option>
                        ))}

                    </select> */}
                </div>
            </div>
            <div>
                <div className='grid lg:grid-cols-4 md:grid-cols-8 sm:grid-cols-10 xs:grid-cols-12 gap-3 overflow-y-auto' >
                    {videoList.map((val: UploadIamgeList, i) => (
                        <div key={i} className='p-2'>
                            {/* <DownloadImage publicId={val.publicId} type={val.fileType} /> */}
                            <VideoPlayer src={val.publicId}
                                width={""} // Set your desired width
                                height={""} // Set your desired height
                                autoPlay={currentVideo === val.publicId} // Auto play if this is the current video
                                onPlay={handleVideoPlay}  // Set as current video when it starts playing
                                onPause={() => setCurrentVideo(null)} // Reset current video when it pauses
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Video