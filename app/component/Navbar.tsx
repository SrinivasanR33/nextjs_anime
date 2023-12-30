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
import { IconStyle, Linkpage } from '../commen/CommenName'
import { TbWorldUpload } from "react-icons/tb";
import { RiContactsBookUploadFill } from "react-icons/ri";
import { ImUpload } from "react-icons/im";
import { FaRegImage } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
// import SignOutPage from './Logout'
import LogoutButton from './Logout'
import { FaRegCircleUser } from 'react-icons/fa6'
import { link } from 'fs'
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
                    {status === "authenticated" && <li ><Link href={Linkpage.home.link}>{Linkpage.home.label}</Link></li>}
                    {status === "authenticated" && admin && <li><Link href={Linkpage.users.link}>{Linkpage.users.label}</Link></li>}
                    {status === "authenticated" && admin && <li><Link href={Linkpage.upload.link}>{Linkpage.upload.label}</Link></li>}
                    {status === "authenticated" && admin && <li>
                        <div className="dropdown dropdown-hover dropdown-bottom">
                            <div tabIndex={0} role="button">Masters</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link href={Linkpage.uploadMaster.link}>{Linkpage.uploadMaster.label}</Link></li>

                            </ul>
                        </div></li>}
                    {status === "authenticated" && <li><Link href={Linkpage.image.link}>{Linkpage.image.label}</Link></li>}
                    {status === "authenticated" && <li><Link href={Linkpage.video.link}>{Linkpage.video.label}</Link></li>}
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
                    {status === "unauthenticated" && <li><Link href={Linkpage.login.link}><button className='btn  btn-accent btn-xs'>{Linkpage.login.label}</button> </Link></li>}
                </ul>
            </div>
            <div className='md:hidden sm:hidden xs:flex'>
                {/* {status === "unauthenticated" && <li><Link href={Linkpage.login.link}><button className='btn  btn-accent btn-xs'>{Linkpage.login.label}</button> </Link></li>}
                {status === "authenticated" && <LogoutButton />} */}
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
                            {status === "authenticated" && <li><Link href={Linkpage.home.link}><IconContainer classname={IconStyle.sideBarIcon} element={FiHome} />{Linkpage.home.label}</Link></li>}
                            {status === "authenticated" && admin && <li><Link href={Linkpage.users.link}><IconContainer classname={IconStyle.sideBarIcon} element={FaRegCircleUser} />{Linkpage.users.label}</Link></li>}
                            {status === "authenticated" && admin && <li><Link href={Linkpage.upload.link}><IconContainer classname={IconStyle.sideBarIcon} element={TbWorldUpload} />{Linkpage.upload.label}</Link></li>}
                            {status === "authenticated" && admin && <li> <details open>
                                <summary><IconContainer classname={IconStyle.sideBarIcon} element={RiContactsBookUploadFill} />Master</summary>
                                <ul>
                                    <li><Link href={Linkpage.uploadMaster.link}><IconContainer classname={IconStyle.sideBarSubIcon} element={ImUpload} />{Linkpage.uploadMaster.label}</Link></li>
                                </ul>
                            </details></li>}
                            {status === "authenticated" && <li><Link href={Linkpage.image.link}><IconContainer classname={IconStyle.sideBarIcon} element={FaRegImage} />{Linkpage.image.label}</Link></li>}
                            {status === "authenticated" && <li><Link href={Linkpage.video.link}><IconContainer classname={IconStyle.sideBarIcon} element={MdOndemandVideo} />{Linkpage.video.label}</Link></li>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar