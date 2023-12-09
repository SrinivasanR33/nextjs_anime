import React from 'react'
import imag from "../../public/S.png"
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { Logoutbutton } from './Buttoncomponent'
// import SwitchTheme from './theme/Theme'
interface Props {
    page: String,
}
function Navbar(props: Props) {
    const { page } = props
    const { status, data: session } = useSession()
    const userImage: string = session && session.user?.image ? session.user.image : "";

    return (
        <div className="navbar h-4 bg-slate-400">
            <div className="flex-1">
                <a href='/' className="btn btn-ghost normal-case text-xl"><Image src={imag} className="w-8" alt='hi' /></a>
            </div>
            <div className="navbar-center hidden  md:flex">
                <ul className="menu menu-horizontal ">
                    {status === "authenticated" && <li ><Link href={"/home"}>Home</Link></li>}
                    {/* <li className='pt-1'><Link href={"/home/user"}>User</Link></li> */}
                    <li><Link href={"/upload"}>Upload</Link></li>
                    {status === "authenticated" && <li><Link href={"/imagelist"}>Images</Link></li>}
                    {status === "authenticated" && <li className='hover:text-red-500 translate-x-1'><Link href={"/api/auth/signout"}>
                        <Logoutbutton />
                        {/* <button className='btn btn-secondary btn-sm'>Logout</button> */}
                    </Link></li>}
                    {status === "authenticated" &&
                        <div className="avatar">
                            <div className="w-10 rounded-full ring ring-blue-600">
                                <img src={userImage} alt='hi' />
                            </div>
                        </div>}
                    {status === "loading" && <li className='progress-error'></li>}
                    {/* <li className='pt-1'><Link href={"/help"}>Help</Link></li> */}
                    {/* <li><Link href={"/login"}><button className='btn btn-primary btn-sm hover:shadow-sm '>Login</button> </Link></li> */}
                    {status === "unauthenticated" && <li><Link href={"/api/auth/signin"}><button className='btn btn-accent btn-xs'>Login</button> </Link></li>}
                </ul>
            </div>
        </div>
    )
}

export default Navbar