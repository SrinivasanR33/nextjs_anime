'use client'
import { useState } from 'react';
import UploadType from '../component/uploadComponent/Upload';
import { DEFAULT_FOLDER_NAME } from '../commen/CommenName';

interface cloudinaryresult {
    public_id: string
}
const UploadPage = () => {
    const [publicId, setpublicId] = useState("")
    const [folderNameandId, setFolderNameandId] = useState('')
    const [isActive, setIsActive] = useState(false)
    const arr = [
        {
            name: "one", id: "vxq3b8ev"
        },
    ]
    const handelselectFunction = (e: string) => {
        console.log(e)
        setFolderNameandId(e)
        setIsActive(!isActive)

    }
    return (
        <>
            <div className='flex gap-7 p-2'>
                {folderNameandId}
                <div>
                    <select className="select select-accent text-black w-full max-w-xs" onChange={(e) => handelselectFunction(e.target.value)}>
                        <option value={DEFAULT_FOLDER_NAME}>Select Folder name</option>
                        {arr.map((val, i) => (
                            <option key={i} value={val.id}>{val.name}</option>
                        ))}

                    </select>
                </div>
                <div>
                    <UploadType publicId={publicId} setpublicId={setpublicId} uploadFolderId={folderNameandId} />
                </div>
            </div>
        </>

    )
}
export default UploadPage