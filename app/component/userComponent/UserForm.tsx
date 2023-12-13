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
    const { userData } = useAppSelector((state) => state.userReducer);
    const [stateValue, setstateValue] = useState<datavalue>({
        id: "",
        name: "",
        email: "",
        number: "",
        isAdmin: false,
        password: '',
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: string) => {
        if (index === "name") {
            setstateValue((per: datavalue) => {
                const res = { ...per, name: e.target.value }
                return res
            })
        }
        if (index === "password") {
            setstateValue((per: datavalue) => {
                const res = { ...per, password: e.target.value }
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
        await getUserAPI()
    }
    useEffect(() => {
        apicall()
    }, [])
    useEffect(() => {
        setstateValue({
            id: userData.id,
            name: userData.name,
            email: userData.email,
            number: userData.number,
            isAdmin: userData.isAdmin,
            password: userData.password
        })
    }, [userData])

    const onSubmit1 = async () => {
        if (userData.id) {
            await CreateUserAPI(stateValue, "put")
            await apicall()
            resetData()
        } else {
            console.log(stateValue, "statevalue")
            await CreateUserAPI(stateValue, "post")
            await apicall()
            setstateValue({
                name: "",
                email: "",
                number: "",
                isAdmin: false,
                password: ''
            })
        }

    }
    const handleonInput = (e: React.FormEvent<HTMLInputElement>) => {
        e.currentTarget.value = e.currentTarget.value.slice(0, 10)
    }
    const handelCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setstateValue({ ...stateValue, isAdmin: e.currentTarget.checked })
    }
    const resetData = () => {
        setstateValue({
            name: "", email: "", number: "", id: "", isAdmin: false,
            password: ''
        })
        dispatch(editUser({
            id: '',
            name: "",
            email: "",
            number: "",
            isAdmin: false,
            password: ''
        }))
    }
    return (
        <div>
            <div className='px-4'>
                <div className='grid  lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-2  gap-2'>
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
                            onInput={(e) => handleonInput(e)}
                            placeholder={formName.number}
                            className={"input input-bordered w-full max-w-xs input-sm"} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">{formName.password}</span>
                        </label>
                        <input
                            type={"password"}
                            value={stateValue.password}
                            onChange={(e) => handleInputChange(e, 'password')}
                            placeholder={formName.password}
                            className={"input input-bordered w-full max-w-xs input-sm"} />
                    </div>
                    <div className="form-control flex flex-row gap-7 pt-9">

                        <span className="label-text">Admin</span>
                        <input type="checkbox" checked={stateValue.isAdmin} onChange={(e) => handelCheckBox(e)} className="checkbox checkbox-success" />

                    </div>
                </div>
                <div className='pt-7 flex gap-2 justify-center '>
                    <button className='btn btn-neutral btn-sm btn-success' disabled={!stateValue.email || !stateValue.name || !stateValue.number || !stateValue.isAdmin} onClick={(e) => onSubmit1()}>Submit</button>
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