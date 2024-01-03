'use client'
import { UserL, UserLT } from '@/app/commen/CommenTypeDefination'
import { DeleteUserAPI, getUserAPI } from '@/app/home/user/userService'
import { editUser, getUserList } from '@/redux/actions/userSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hook/hook'
// import { ActionIcon } from '@/app/commen/InteractionComponents'
import adminimage from "../../../public/adminlogo.jpg"
import React from 'react'
import { FiDelete, FiEdit } from 'react-icons/fi'
import Image from 'next/image'
import { tableName2 } from '@/app/commen/CommenName'
import Table, { Column } from '../datagridComponent/DataGrid'



function Usertable() {
    const dispatch = useAppDispatch()
    const userList: UserL[] = useAppSelector((state) => state.userReducer.userList);
    const { tableLoading } = useAppSelector((state) => state.masterReducer);
    console.log(userList, "userList")
    const apicall = async () => {
        await getUserAPI()
    }
    const handeldelete = async (id: string) => {
        console.log(id, "er")
        await DeleteUserAPI(id)
        await apicall()
    }
    const col: Column<UserL>[] = [
        {
            Header: "Name", accessor: 'name', isAction: true, action: (row: UserL) => (
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle rounded-full w-12 h-12">
                            <Image src={adminimage} className='w-8' alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{row.name}</div>
                    </div>
                </div>
            )
        },
        {
            Header: "Email", accessor: "email"
        },
        {
            Header: "Number", accessor: "number"
        },
        {
            Header: 'Actions',
            accessor: 'number',
            isAction: true,
            action: (row: UserL) => (
                <div className='flex gap-4'>
                    <div className='text-blue-500 hover:cursor-pointer' onClick={() => dispatch(editUser(row))}><FiEdit /></div>
                    <div className='text-red-500 hover:cursor-pointer' onClick={() => handeldelete(row._id)}><FiDelete /></div>
                </div>
            ),
        },
    ]
    return (
        <div >
            <div className='text-center font-bold'>{tableName2}</div>
            <Table columns={col} data={userList} loading={tableLoading as boolean} />
            {/* {emploeeLoading ?
                <div role="status" className="w-full animate-pulse">
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                </div> :
                <div className="h-2/3 overflow-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {userList.map((val: UserL, i: number) => (
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <Image src={adminimage} className='w-8' alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{val.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{val.email}</td>
                                    <td>{val.number}</td>
                                    <td className='flex gap-2 pt-7'>
                                        <div className='text-blue-500 hover:cursor-pointer' onClick={() => dispatch(editUser(val))}><FiEdit /></div>
                                        <div className='text-red-500 hover:cursor-pointer' onClick={() => handeldelete(val._id)}><FiDelete /></div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>} */}
        </div>
    )
}

export default Usertable