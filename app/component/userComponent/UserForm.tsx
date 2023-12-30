'use client'
import { formName } from '@/app/commen/CommenName';
import { UserL, UserLT, datavalue } from '@/app/commen/CommenTypeDefination';
import { CreateUserAPI, getUserAPI } from '@/app/home/user/userService';
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hook/hook';
import { editUser, getUserList } from '@/redux/actions/userSlice';
import UserFormInput from '../formFieldComponet/FormFieldComponent';
import CheckBox from '../formFieldComponet/CheckBoxComponent';
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
            id: userData._id,
            name: userData.name,
            email: userData.email,
            number: userData.number,
            isAdmin: userData.isAdmin,
            password: userData.password
        })
    }, [userData])

    const onSubmit1 = async () => {
        if (userData._id) {
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
            _id: '',
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
                    <UserFormInput
                        label={formName.name}
                        value={stateValue.name}
                        onChange={(e) => handleInputChange(e, 'name')}
                        type="text"
                        placeholder={formName.name}
                    />
                    <UserFormInput
                        label={formName.email}
                        value={stateValue.email}
                        onChange={(e) => handleInputChange(e, 'email')}
                        type="text"
                        placeholder={formName.email}
                    />
                    <UserFormInput
                        label={formName.number}
                        value={stateValue.number}
                        onChange={(e) => handleInputChange(e, 'number')}
                        onInput={(e) => handleonInput(e)}
                        type="number"
                        placeholder={formName.number}
                    />
                    <UserFormInput
                        label={formName.password}
                        value={stateValue.password}
                        onChange={(e) => handleInputChange(e, 'password')}
                        type="password"
                        placeholder={formName.password}
                    />
                    <div className="form-control flex flex-row gap-7 pt-9 pl-6">
                        <CheckBox label="Admin" checked={stateValue.isAdmin} onChange={(e) => handelCheckBox(e)} />
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