'use client'
import React, { useEffect, useState } from 'react'
import { LoginUserList } from './LoginUserService'
import { UserLoginData } from '@/utils/types'
import { tableName1 } from '../commen/CommenName'
import Table, { Column } from '../component/datagridComponent/DataGrid'

function LoginUser() {
    const [loggedUsers, setLoggedUsers] = useState([])
    const ListApi = async () => {
        const res = await LoginUserList()
        setLoggedUsers(res?.data)
    }
    useEffect(() => {
        ListApi()
    }, [])
    const col: Column<UserLoginData>[] = [
        {
            Header: "Name", accessor: 'name', isAction: true, action: (row: UserLoginData) => (
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle rounded-full w-12 h-12">
                            <img src={row.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{row.name}</div>
                    </div>
                </div>
            )
        },
        {
            Header: "Email", accessor: "email",
        },
    ]
    return (
        <div>
            <div className='text-center font-bold'>{tableName1}</div>
            <Table columns={col} data={loggedUsers} />
            {/* <div className=" h-2/3 overflow-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>SNo</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loggedUsers.map((val: UserLoginData, i) => (
                            <tr key={i}>

                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={val.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{val.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {val.email}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div> */}
        </div>
    )
}

export default LoginUser