'use client'
import { formName } from '@/app/commen/CommenName';
import { CreateUserAPI } from '@/app/home/user/userService';
import { type } from 'os';
import React, { useState } from 'react'
import { number } from 'zod';
interface input {
    name: String;
    value: String | Boolean;
    type: String;
}
type Props = input[]
interface datavalue {
    name: string;
    email: string;
    number: number;
}

const UserForm: React.FC<{ users: Props }> = ({ users }) => {
    const [formValues, setFormValues] = useState(users);
    const [stateValue, setstateValue] = useState<datavalue>({
        name: "",
        email: "",
        number: 0
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
                const res = { ...per, number: +e.target.value }
                return res
            })
        }
    };
    const onSubmit1 = async () => {
        console.log(stateValue, "statevalue")
        await CreateUserAPI(stateValue)
        // event.preventDefault()
        // console.log(formValues)

        // console.log(event.target)
        // const formData = new FormData(event.target as HTMLFormElement)
        // console.log(formData.get('value'))
        // formData.forEach((value: FormDataEntryValue, key: string) => {
        //     console.log(key, value, 'HI');
        // });
    }
    return (
        <div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2  gap-2'>

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
            <div className='pt-3 text-center '>
                <button className='btn btn-neutral btn-sm hover: bg-black text-green-700' onClick={(e) => onSubmit1()}>Submit</button>
            </div>
        </div>
    )
}

export default UserForm