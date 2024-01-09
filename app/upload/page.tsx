'use client'
import { useEffect, useState } from 'react';
import UploadType from '../component/uploadComponent/Upload';
import { DEFAULT_FOLDER_NAME, UploadArrayType, selectArr } from '../commen/CommenName';
import SelectField from '../component/SelectComponent';
import { CreateUploadMasterAPI } from '../masters/uploadMasters/UploadMasterService';
import { UploadMasterType } from '@/utils/types';
import { SelecfieldArr } from '../commen/CommenTypeDefination';

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
    const [typeObjectValue, setTypeObjectValue] = useState<SelecfieldArr | undefined>({
        value: "",
        label: '',
        allValue: {}
    })
    const [isActive, setIsActive] = useState(false)
    const [masterList, setMasterList] = useState<SelecfieldArr[]>([])
    const handelselectFunction = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value)
        const typeName = masterList.find((val: SelecfieldArr) => val.value === e.target.value)
        setTypeObjectValue(typeName)
        setFolderNameandId(typeName?.allValue?.uploadId)
        setIsActive(!isActive)
        console.log(typeName, e.target.value)
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
            <div className='max-h-screen flex justify-center gap-7 p-2'>
                {/* {folderNameandId} */}
                <div>
                    <SelectField options={masterList} label='name' onChange={handelselectFunction} />
                    {/* <select className="select select-accent w-full max-w-xs" onChange={handelselectFunction}>
                        <option value={DEFAULT_FOLDER_NAME}>Select Folder name</option>
                        {arr.map((val, i) => (
                            <option key={i} value={val.sno}>{val.name}</option>
                        ))}

                    </select> */}
                </div>
                <div >
                    <UploadType publicId={publicId} setpublicId={setpublicId} folderName={typeObjectValue?.value} uploadFolderId={folderNameandId} />
                </div>
            </div>
        </>

    )
}
export default UploadPage