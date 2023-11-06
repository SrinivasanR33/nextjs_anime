import UserForm from '@/app/component/userComponent/UserForm'
import React from 'react'

const User = () => {
    const arr = [{
        name: "Name",
        value: "",
        type: 'text'
    },
    {
        name: "Email",
        value: "",
        type: "email"
    },
    {
        name: "Phone Number",
        value: "",
        type: "number"
    },
    {
        name: "SMS & Mail",
        value: "",
        type: "checkbox"
    }
    ]
    return (
        <div>
            <div className='flex'>
                <div className='p-2 w-1/2'><UserForm users={arr} /></div>
                <div></div>
            </div>
        </div>
    )
}

export default User