import Usertable from '@/app/component/userComponent/Table'
import UserForm from '@/app/component/userComponent/UserForm'
import React from 'react'

const User = () => {

    return (
        <div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-2 pt-4'>
                <div className='p-3'><UserForm /></div>
                <div className='p-3'><Usertable /></div>
            </div>
        </div>
    )
}

export default User