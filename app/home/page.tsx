import React from 'react'
import { getServerSession } from 'next-auth'
import { authOption } from '../api/auth/[...nextauth]/route'
import backgroundImage from "../../public/home/home2.jpg"
import Image from 'next/image'

async function HomePage() {
    const session = await getServerSession(authOption)
    return (
        <div className='flex min-h-full min-w-full bg-white'>
            <div className='min-h-screen w-1/2 bg-green-300 rounded-r-full overflow-auto'>
            </div>
            <Image
                src={backgroundImage}
                className='min-h-screen  w-1/2'
                alt='Background Image'
            // layout='full'
            />
        </div>

    )
}

export default HomePage