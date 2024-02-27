import React from 'react'
import { Linkpage, loacalImage } from '../commen/CommenName'

const Footer = () => {
    return (
        <div className='flex h-[250px]'>
            <footer className="footer p-10 text-neutral-content">
                <nav className=''>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover" href={Linkpage.Privacy.link}>{Linkpage.Privacy.label}</a>
                </nav>
            </footer>
         </div>
    )
}

export default Footer