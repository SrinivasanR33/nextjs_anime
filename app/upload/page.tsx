'use client'
import { useState } from 'react';
import UploadType from '../component/uploadComponent/Upload';
import { DEFAULT_FOLDER_NAME, UploadArrayType } from '../commen/CommenName';

interface cloudinaryresult {
    public_id: string
}
interface TypeObject {
    sno: string;
    name: string;
    id: string
}
const arr = UploadArrayType
const UploadPage = () => {
    const [publicId, setpublicId] = useState("")
    const [folderNameandId, setFolderNameandId] = useState<string | undefined>('')
    const [typeObjectValue, setTypeObjectValue] = useState<TypeObject | undefined>({ sno: "", name: "", id: "" })
    const [isActive, setIsActive] = useState(false)


    const handelselectFunction = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value)
        const typeName = arr.find((val) => val.sno === e.target.value)
        setTypeObjectValue(typeName)
        setFolderNameandId(typeName?.id)
        setIsActive(!isActive)
    }

    return (
        <>
            <div className='flex gap-7 p-2 text-black'>
                {/* {folderNameandId} */}
                <div>
                    <select className="select select-accent text-black w-full max-w-xs" onChange={handelselectFunction}>
                        <option value={DEFAULT_FOLDER_NAME}>Select Folder name</option>
                        {arr.map((val, i) => (
                            <option key={i} value={val.sno}>{val.name}</option>
                        ))}

                    </select>
                </div>
                <div>
                    <UploadType publicId={publicId} setpublicId={setpublicId} folderName={typeObjectValue?.name} uploadFolderId={folderNameandId} />
                </div>
            </div>
        </>

    )
}
export default UploadPage