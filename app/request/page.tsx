'use client'
import { RequestList } from '@/utils/types'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { CreateUploadMasterAPI } from './requestService'
import Table, { Column } from '../component/datagridComponent/DataGrid'
import { useAppSelector } from '@/redux/hook/hook'
import Image from 'next/image'

type Props = {}

const RequestPage = (props: Props) => {
    const { status, data: session } = useSession()
    const { tableLoading } = useAppSelector((state) => state.masterReducer);
    const userImage: string = session && session.user?.image ? session.user.image : "";
    const admin = session?.user?.name ? false : true
    const [paload, setPaload] = useState("")
    const [request, setRequest] = useState<RequestList[]>([])
    const handelSubmit = async () => {
        const date: RequestList = {
            requestMessage: paload,
            isActive: true,
            userInfo: {
                name: session?.user?.name,
                image: session?.user?.image
            }
        }
        const res = await CreateUploadMasterAPI(date, "post")
        console.log(res, "res")
        if (res?.data) {
            setPaload("")
            handelGetAPI()
        }
    }
    const col: Column<RequestList>[] = [
        {
            Header: "Name", accessor: 'userInfo', isAction: true, action: (row: RequestList) => (
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle rounded-full w-12 h-12">
                            <Image src={row?.userInfo?.image || ""} width={40} height={40} className='rounded-full' alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{row.userInfo?.name}</div>
                    </div>
                </div>
            )
        },
        {
            Header: "Request", accessor: 'requestMessage',
        },
    ]
    const handelGetAPI = async () => {
        const res = await CreateUploadMasterAPI()
        if (res) {
            const master = res?.data
            setRequest(master)
        } else {
            setRequest([])
        }
    }
    useEffect(() => {
        handelGetAPI()
    }, [])

    return (
        <div className="min-w-full max-h-screen overflow-auto">
            <div className="flex justify-center gap-4 p-3">
                <textarea className="textarea textarea-primary" placeholder="Request Message" value={paload} onChange={(e) => setPaload(e.target.value)} cols={40} rows={2}></textarea>
                <button className='btn btn-sm btn-primary self-center' disabled={!paload} onClick={handelSubmit}>Send Request</button>
            </div>
            <div className='flex justify-center mx-[1rem]'>
            Submit your requests for favorite image and video categories to the admin. Help us curate content tailored to your preferences for an enhanced browsing experience.
            </div>
            {admin ?
                <div className='p-[2rem] min-h-[500px] overflow-x-auto'>
                    <Table columns={col} data={request} loading={tableLoading as boolean} />
                </div> : null}
        </div>
    )
}

export default RequestPage