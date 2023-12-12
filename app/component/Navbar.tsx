import React from 'react'
import imag from "../../public/S.png"
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { Logoutbutton } from './Buttoncomponent'
import SwitchTheme from './theme/Theme'
import { store } from '@/redux/store/store'
// import SwitchTheme from './theme/Theme'
interface Props {
    page: String,
}
function Navbar(props: Props) {
    const { page } = props
    const { status, data: session } = useSession()
    const admin = store.getState().userReducer.isAdmin
    const userImage: string = session && session.user?.image ? session.user.image : "";
    console.log(session, useSession(), "session")
    return (
        <div className="navbar h-4">
            <div className="flex-1">
                <a href='/' className="btn btn-ghost normal-case text-xl"><Image src={imag} className="w-8" alt='hi' /></a>
            </div>
            <div className="navbar-center hidden  md:flex">
                <ul className="menu menu-horizontal ">
                    {admin || status === "authenticated" && <li ><Link href={"/home"}>Home</Link></li>}
                    {/* <li className='pt-1'><Link href={"/home/user"}>User</Link></li> */}
                    <li><Link href={"/upload"}>Upload</Link></li>
                    {admin || status === "authenticated" && <li><Link href={"/imagelist"}>Images</Link></li>}
                    {admin || status === "authenticated" && <li className='hover:text-red-500 translate-x-1'><Link href={"/api/auth/signout"}>
                        <Logoutbutton />
                        {/* <button className='btn btn-secondary btn-sm'>Logout</button> */}
                    </Link></li>}
                    {status === "authenticated" &&
                        <div className="avatar pr-2">
                            <div className="w-12 rounded-full ring">
                                <img src={userImage} alt='hi' />
                            </div>
                        </div>}
                    <SwitchTheme />
                    {/* <li className='pt-1'><Link href={"/help"}>Help</Link></li> */}
                    {/* <li><Link href={"/login"}><button className='btn btn-primary btn-sm hover:shadow-sm '>Login</button> </Link></li> */}
                    {status === "unauthenticated" && <li><Link href={"/api/auth/signin"}><button className='btn btn-accent btn-xs'>Login</button> </Link></li>}
                </ul>
            </div>
        </div>
    )
}

export default Navbar