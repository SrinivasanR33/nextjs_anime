import React from 'react'
import imag from "../../public/S.png"
import Image from 'next/image'
import Link from 'next/link'
// import SwitchTheme from './theme/Theme'
interface Props {
    page: String,

}
function Navbar(props: Props) {
    const { page } = props
    return (
        <div className="navbar h-12 bg-slate-400">
            <div className="flex-1">
                <a href='/' className="btn btn-ghost normal-case text-xl"><Image src={imag} className="w-8" alt='hi' /></a>
            </div>
            {page === "main" ?
                <div className="navbar-center hidden  md:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='pt-1'><Link href={"/home"}>Home</Link></li>
                        <li className='pt-1'><Link href={"/home/user"}>User</Link></li>
                        <li className='pt-1'><Link href={"/help"}>Help</Link></li>
                        <li><Link href={"/login"}><button className='btn btn-primary btn-sm hover:shadow-sm '>Login</button> </Link></li>
                        <li><Link href={"/signup"}><button className='btn btn-accent btn-sm'>Sign Up</button> </Link></li>
                    </ul>
                </div> :
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href={"/home/user"}>User</a></li>
                        <li><a href={"/help"}>Help</a></li>
                        <li className='hover:text-red-500 translate-x-1'><Link href={"/login"}>Logout</Link></li>
                        {/* <li className='pt-1'><SwitchTheme /></li> */}
                    </ul>
                </div>}
        </div>
    )
}

export default Navbar