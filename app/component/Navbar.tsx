import React from 'react'
import imag from "../../public/S.png"
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
// import SwitchTheme from './theme/Theme'
interface Props {
    page: String,
}
function Navbar(props: Props) {
    const { page } = props
    const { status, data: session } = useSession()
    return (
        <div className="navbar h-12 bg-slate-400">
            <div className="flex-1">
                <a href='/' className="btn btn-ghost normal-case text-xl"><Image src={imag} className="w-8" alt='hi' /></a>
            </div>
                <div className="navbar-center hidden  md:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='pt-1'><Link href={"/home"}>Home</Link></li>
                        <li className='pt-1'><Link href={"/home/user"}>User</Link></li>
                        {status === "authenticated" && <li className='pt-1'>{session.user?.name}</li>}
                        {status === "authenticated" && <li className='hover:text-red-500 translate-x-1'><Link href={"/api/auth/signout"}><button className='btn btn-secondary btn-sm'>Logout</button></Link></li>}
                        {status === "loading" && <li className='progress-error'></li>}
                        <li className='pt-1'><Link href={"/help"}>Help</Link></li>
                        {/* <li><Link href={"/login"}><button className='btn btn-primary btn-sm hover:shadow-sm '>Login</button> </Link></li> */}
                        {status === "unauthenticated" && <li><Link href={"/api/auth/signin"}><button className='btn btn-accent btn-sm'>Login</button> </Link></li>}
                    </ul>
                </div> 
        </div>
    )
}

export default Navbar