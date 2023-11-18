'use client'
import { UserL, UserLT } from '@/app/commen/CommenTypeDefination'
import { getUserAPI } from '@/app/home/user/userService'
import { editUser } from '@/redux/actions/userSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hook/hook'
// import { ActionIcon } from '@/app/commen/InteractionComponents'
import React from 'react'
import { FiDelete, FiEdit } from 'react-icons/fi'



function Usertable() {
    const dispatch = useAppDispatch()

    const userList = useAppSelector((state) => state.userReducer.userList);
    console.log(userList, "userList")

    return (
        <div className="overflow-x-auto">
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
                                <div className='text-red-500 hover:cursor-pointer'><FiDelete /></div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Usertable