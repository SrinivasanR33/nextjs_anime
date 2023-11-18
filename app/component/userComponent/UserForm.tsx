'use client'
import { formName } from '@/app/commen/CommenName';
import { UserL, UserLT, datavalue } from '@/app/commen/CommenTypeDefination';
import { CreateUserAPI, getUserAPI } from '@/app/home/user/userService';
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hook/hook';
import { editUser, getUserList } from '@/redux/actions/userSlice';
const UserForm = () => {
    type UserLy = UserL[]
    const dispatch = useAppDispatch()
    const userData = useAppSelector((state) => state.userReducer.userData);
    const [stateValue, setstateValue] = useState<datavalue>({
        name: "",
        email: "",
        number: ""
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: string) => {
        if (index === "name") {
            setstateValue((per: datavalue) => {
                const res = { ...per, name: e.target.value }
                return res
            })
        }
        if (index === "email") {
            setstateValue((per: datavalue) => {
                const res = { ...per, email: e.target.value }
                return res
            })
        }
        if (index === "number") {
            setstateValue((per: datavalue) => {
                const res = { ...per, number: e.target.value }
                return res
            })
        }
    };

    const apicall = async () => {
        const res = await getUserAPI()
        const userList = await res.json()
        dispatch(getUserList(userList))
    }

    useEffect(() => {
        apicall()
    }, [])
    useEffect(() => {
        setstateValue({
            name: userData.name,
            email: userData.email,
            number: userData.number
        })
    }, [userData])

    const onSubmit1 = async () => {
        console.log(stateValue, "statevalue")
        await CreateUserAPI(stateValue)
        await apicall()
        setstateValue({
            name: "",
            email: "",
            number: ""
        })

    }
    const resetData = () => {
        setstateValue({ name: "", email: "", number: "" })
        dispatch(editUser({
            id: '',
            name: "",
            email: "",
            number: ""
        }))
    }
    return (
        <div>
            <div className='px-4'>
                <div className='grid  lg:grid-cols-3 sm:grid-cols-2 text-gray-100 md:grid-cols-2  gap-2'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">{formName.name}</span>
                        </label>
                        <input
                            type={"text"}
                            value={stateValue.name}
                            onChange={(e) => handleInputChange(e, 'name')}
                            placeholder={formName.name}
                            className={"input input-bordered w-full max-w-xs input-sm"} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">{formName.email}</span>
                        </label>
                        <input
                            type={"text"}
                            value={stateValue.email}
                            onChange={(e) => handleInputChange(e, 'email')}
                            placeholder={formName.email}
                            className={"input input-bordered w-full max-w-xs input-sm"} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">{formName.number}</span>
                        </label>
                        <input
                            type={"number"}
                            value={stateValue.number}
                            onChange={(e) => handleInputChange(e, 'number')}
                            placeholder={formName.number}
                            className={"input input-bordered w-full max-w-xs input-sm"} />
                    </div>
                </div>
                <div className='pt-7 flex gap-2 justify-center '>
                    <button className='btn btn-neutral btn-sm btn-success' onClick={(e) => onSubmit1()}>Submit</button>
                    <button className='btn btn-neutral btn-sm btn-error' onClick={() => resetData()}>Reset</button>
                </div>
            </div>
            {/* <div>
                <div className='p-3'><Usertable userList={userArray} /></div>
            </div> */}
        </div>
    )
}

export default UserForm