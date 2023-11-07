import Usertable from '@/app/component/userComponent/Table'
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
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-2 pt-4'>
                <div><UserForm users={arr} /></div>
                <div><Usertable /></div>
            </div>
        </div>
    )
}

export default User