"use client"

import { uploadMasterFormName } from "@/app/commen/CommenName"
import CheckBox from "@/app/component/formFieldComponet/CheckBoxComponent"
import UserFormInput from "@/app/component/formFieldComponet/FormFieldComponent"
import { UploadMasterType } from "@/utils/types"
import { useEffect, useState } from "react"
import { CreateUploadMasterAPI } from "./UploadMasterService"
import Table, { Column } from "@/app/component/datagridComponent/DataGrid"
import { useAppSelector } from "@/redux/hook/hook"
import { FiDelete, FiEdit } from "react-icons/fi"

function UploadMasters() {
    const insialData = {
        codeName: '',
        isActive: true,
        name: '',
        uploadId: ''
    }
    const { tableLoading } = useAppSelector((state) => state.masterReducer);
    const [stateValue, setStateValue] = useState<UploadMasterType>(insialData)
    const [masterList, setMasterList] = useState<UploadMasterType[]>([])
    const [edit, setEdit] = useState<boolean>(false)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: string) => {
        const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setStateValue((per: UploadMasterType) => {
            return {
                ...per,
                [index]: newValue,
            };
        });
    };
    const handelReset = () => {
        setStateValue(insialData);
        handelGetAPI()
        setEdit(false)
    }
    const handelSubmit = async () => {
        console.log(stateValue)
        if (edit) {
            const res = await CreateUploadMasterAPI(stateValue, "put")
            if (res) {
                setEdit(false)
                handelReset()
            }
        } else {
            const res = await CreateUploadMasterAPI(stateValue, "post")
            if (res) {
                handelReset()
            }
        }
    }
    const handelEdit = (row: UploadMasterType) => {
        setEdit(true)
        setStateValue({
            _id: row._id,
            codeName: row.codeName,
            isActive: row.isActive,
            name: row.name,
            uploadId: row.uploadId
        })
    }
    const handelGetAPI = async () => {
        const res = await CreateUploadMasterAPI()
        if (res) {
            const master = res?.data
            setMasterList(master)
        } else {
            setMasterList([])
        }
    }
    const handeldelete = async (id: string | undefined) => {
        await CreateUploadMasterAPI("", "delete", id)
        handelGetAPI()
    }
    const col: Column<UploadMasterType>[] = [
        {
            Header: "Name", accessor: 'name',
        },
        {
            Header: "Code Name", accessor: "codeName"
        },
        {
            Header: "Upload Id", accessor: "uploadId"
        },
        {
            Header: 'Actions',
            accessor: 'name',
            isAction: true,
            action: (row: UploadMasterType) => (
                <div className='flex gap-4'>
                    <div className='text-blue-500 hover:cursor-pointer' onClick={() => handelEdit(row)}><FiEdit /></div>
                    <div className='text-red-500 hover:cursor-pointer' onClick={() => handeldelete(row._id)}><FiDelete /></div>
                </div >
            ),
        },
    ]
    useEffect(() => {
        handelGetAPI()
    }, [])

    return (
        <div className="min-w-full max-h-screen overflow-auto">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 gap-6 pl-4">
                <UserFormInput
                    // className="border-spacing-2"
                    label={uploadMasterFormName.name}
                    value={stateValue.name}
                    onChange={(e) => handleInputChange(e, 'name')}
                    type="text"
                // placeholder={uploadMasterFormName.name}
                />
                <UserFormInput label={uploadMasterFormName.codeName}
                    value={stateValue.codeName}
                    onChange={(e) => handleInputChange(e, 'codeName')}
                    type="text"
                // placeholder={uploadMasterFormName.codeName}
                />
                <UserFormInput label={uploadMasterFormName.uploadId}
                    value={stateValue.uploadId}
                    onChange={(e) => handleInputChange(e, 'uploadId')}
                    type="text"
                // placeholder={uploadMasterFormName.uploadId}
                />
                <div className="pt-10 flex gap-6">
                    <CheckBox label={uploadMasterFormName.isActive} checked={stateValue.isActive} onChange={(e) => handleInputChange(e, 'isActive')} />
                    <button className="btn btn-sm btn-accent" onClick={handelSubmit}>Submit</button>
                </div>
            </div>
            <div className="p-16">
                <Table columns={col} data={masterList} loading={tableLoading as boolean} />
            </div>
        </div>
    )

}
export default UploadMasters