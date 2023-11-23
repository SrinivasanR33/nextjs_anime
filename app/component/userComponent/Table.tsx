'use client'
import { UserL, UserLT } from '@/app/commen/CommenTypeDefination'
import { DeleteUserAPI, getUserAPI } from '@/app/home/user/userService'
import { editUser, getUserList } from '@/redux/actions/userSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hook/hook'
// import { ActionIcon } from '@/app/commen/InteractionComponents'
import React from 'react'
import { FiDelete, FiEdit } from 'react-icons/fi'



function Usertable() {
    const dispatch = useAppDispatch()
    const userList = useAppSelector((state) => state.userReducer.userList);
    const { emploeeLoading } = useAppSelector((state) => state.masterReducer);
    console.log(userList, "userList")
    const apicall = async () => {
        await getUserAPI()
    }
    const handeldelete = async (id: string) => {
        await DeleteUserAPI(id)
        await apicall()
    }

    return (
        <div className="overflow-x-auto">
            {emploeeLoading ?
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
                <>
                    <table className="table text-gray-200 table-xs table-pin-rows table-pin-cols">
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
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.number}</td>
                                    <td className='flex gap-2'>
                                        <div className='text-blue-500 hover:cursor-pointer' onClick={() => dispatch(editUser(val))}><FiEdit /></div>
                                        <div className='text-red-500 hover:cursor-pointer' onClick={() => handeldelete(val.id)}><FiDelete /></div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>}
        </div>
    )
}

export default Usertable