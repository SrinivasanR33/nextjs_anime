'use client'
import React, { useState } from 'react'
interface input {
    name: String;
    value: String | Boolean;
    type: String;
}
type Props = input[]
const UserForm: React.FC<{ users: Props }> = ({ users }) => {
    const [formValues, setFormValues] = useState(users);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const updatedFormValues = [...formValues];
        updatedFormValues[index].value = e.target.value;
        console.log(e.target.value, " e.target.value")
        setFormValues(updatedFormValues);
    };
    const onSubmit1 = (event: React.FormEvent) => {
        event.preventDefault()
        console.log(event)
        console.log(event.target)
        const formData = new FormData(event.target as HTMLFormElement)
        console.log(formData.get('value'))
        formData.forEach((value: FormDataEntryValue, key: string) => {
            console.log(key, value, 'HI');
        });
    }
    return (
        <form onSubmit={onSubmit1}>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2  gap-2'>
                {formValues.map((val: input, i) => (
                    <div key={i} className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">{val.name}</span>
                        </label>
                        <input
                            type={val.type as string}
                            value={formValues[i].value as string}
                            onChange={(e) => handleInputChange(e, i)}
                            placeholder={val.name as string}
                            className={val.type === "checkbox" ? "checkbox checkbox-secondary mt-1" : "input input-bordered w-full max-w-xs input-sm"} />
                    </div>
                ))}
            </div>
            <div className='pt-3 text-center '>
                <button className='btn btn-neutral btn-sm hover: bg-black text-green-700' type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default UserForm