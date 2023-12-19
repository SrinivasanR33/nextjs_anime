import React from 'react'
import imag from "../../public/S.png"
import adminLogo from "../../public/adminlogo.jpg"
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { Logoutbutton } from './Buttoncomponent'
import SwitchTheme from './theme/Theme'
import { store } from '@/redux/store/store'
import MyImage from './ImageComponent/CustomImage'
import ImageDetail from './ImageComponent/Fullpagepriview'
// import SwitchTheme from './theme/Theme'
interface Props {
    page: String,
}
function Navbar(props: Props) {
    const { page } = props
    const { status, data: session } = useSession()
    const userImage: string = session && session.user?.image ? session.user.image : "";
    const admin = session?.user?.name ? false : true
    console.log(session, useSession(), "session")
    return (
        <div className="navbar h-4 border-b-2 border-t-2 border-green-800">
            <div className="flex-1">
                <a href='/' className="btn btn-ghost normal-case text-xl"><MyImage src={imag} className="w-8 transition ease-out hover:scale-125" alt='hi' /></a>
            </div>
            {/* <ImageDetail image={"https://res.cloudinary.com/ddaygokti/image/upload/v1702123881/one/gizlvhxuky584wlueugl.jpg"} /> */}
            <div className="navbar-center hidden  md:flex">
                <ul className="menu menu-horizontal ">
                    {status === "authenticated" && <li ><Link href={"/home"}>Home</Link></li>}
                    {admin && <li><Link href={"/home/user"}>User</Link></li>}
                    {admin && <li><Link href={"/upload"}>Upload</Link></li>}
                    {/* {admin && <li><Link href={"/loginusers"}>Login Users</Link></li>} */}
                    {status === "authenticated" && <li><Link href={"/imagelist"}>Images</Link></li>}
                    {status === "authenticated" && <li className='hover:text-red-500 translate-x-1'><Link href={"/api/auth/signout"}>
                        <Logoutbutton />
                        {/* <button className='btn btn-secondary btn-sm'>Logout</button> */}
                    </Link></li>}
                    {status === "authenticated" &&
                        <div className="avatar h-10 w-12 pr-2">
                            <div className="w-12 rounded-full ring">
                                {admin ? <MyImage src={adminLogo} alt='hi' /> : <MyImage height={500} width={500} src={userImage} alt="hi" />}
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