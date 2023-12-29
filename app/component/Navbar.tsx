import React from 'react'
import imag from "../../public/S.png"
import adminLogo from "../../public/adminlogo.jpg"
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { IconContainer, Logoutbutton } from './Buttoncomponent'
import SwitchTheme from './theme/Theme'
import { store } from '@/redux/store/store'
import MyImage from './ImageComponent/CustomImage'
import ImageDetail from './ImageComponent/Fullpagepriview'
import { FiHome } from 'react-icons/fi'
import { IconStyle } from '../commen/CommenName'
// import SignOutPage from './Logout'
import LogoutButton from './Logout'
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
            <div className="navbar-center hidden lg:flex md:flex sm:flex">
                <ul className="menu menu-horizontal ">
                    {status === "authenticated" && <li ><Link href={"/home"}>Home</Link></li>}
                    {status === "authenticated" && admin && <li><Link href={"/home/user"}>User</Link></li>}
                    {status === "authenticated" && admin && <li><Link href={"/upload"}>Upload</Link></li>}
                    {status === "authenticated" && <li><Link href={"/imagelist"}>Images</Link></li>}
                    {status === "authenticated" && <li><Link href={"/video"}>Video</Link></li>}
                    {status === "authenticated" && <li>
                        <Link href={""}>
                            <LogoutButton />
                        </Link>
                    </li>}
                    {status === "authenticated" &&
                        <div className="avatar h-10 w-12 pr-2">
                            <div className="w-12 rounded-full ring">
                                {admin ? <MyImage src={adminLogo} alt='hi' /> : <MyImage height={500} width={500} src={userImage} alt="hi" />}
                            </div>
                        </div>}
                    <SwitchTheme />
                    {status === "unauthenticated" && <li><Link href={"/api/auth/signin"}><button className='btn  btn-accent btn-xs'>Login</button> </Link></li>}
                </ul>
            </div>
            <div className='md:hidden sm:hidden xs:flex'>
                <SwitchTheme />
                <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content pl-2">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="drawer-button"><IconContainer classname={IconStyle.navbarIcon} element={FiHome} /></label>
                    </div>
                    <div className="drawer-side mt-16">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            {status === "authenticated" && <li><Link href={"/home"}><IconContainer classname={IconStyle.sideBarIcon} element={FiHome} />Home</Link></li>}
                            {status === "authenticated" && admin && <li><Link href={"/home/user"}><IconContainer classname={IconStyle.sideBarIcon} element={FiHome} />User</Link></li>}
                            {status === "authenticated" && admin && <li><Link href={"/upload"}><IconContainer classname={IconStyle.sideBarIcon} element={FiHome} />Upload</Link></li>}
                            {status === "authenticated" && <li><Link href={"/imagelist"}><IconContainer classname={IconStyle.sideBarIcon} element={FiHome} />Images</Link></li>}
                            {status === "authenticated" && <li><Link href={"/video"}><IconContainer classname={IconStyle.sideBarIcon} element={FiHome} />Video</Link></li>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar