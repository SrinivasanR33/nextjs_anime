"use client"
import React, { useState } from 'react'
import { UploadArrayType } from '../commen/CommenName'
import { UploadImageList } from './imageListService'
import CustomImage from '../component/ImageComponent/CustomImage'
import CloudinaryImage from '../component/ImageComponent/CloudinaryImage'



function ImageList() {
    const arr = UploadArrayType
    const [imageList, setImageList] = useState([])
    const handelFilter = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const payload = e.target.value
        const res = await UploadImageList(payload)
        setImageList(res.data)
    }
    return (
        <div>
            <div className='flex gap-7 p-2 text-black'>
                {/* {folderNameandId} */}
                <div>
                    <select className="select select-accent text-black w-full max-w-xs" onChange={handelFilter}>
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
                {imageList.map((val: any, i) => (
                    <div key={i} className='p-2'>
                        <CloudinaryImage publicId={val.publicId} alt='image' />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default ImageList