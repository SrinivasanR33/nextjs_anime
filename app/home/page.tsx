import React from 'react'
import Navbar from '../component/Navbar'
import { getServerSession } from 'next-auth'
import { authOption } from '../api/auth/[...nextauth]/route'

async function HomePage() {
    const session = await getServerSession(authOption)
    return (
        <div className="min-h-screen min-w-full">
            <h1>Hello {session && session.user?.name} </h1>
        </div>

    )
}

export default HomePage