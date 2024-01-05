import React from 'react'
import { Linkpage, loacalImage } from '../commen/CommenName'

const Footer = () => {
    return (
        // <LayoutBackground backgroundImage={backgroundImage}>
        <div>
            {/* <Image src={loacalImage.footer.footerImage1} alt='hi' /> */}
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover" href={Linkpage.Privacy.link}>{Linkpage.Privacy.label}</a>
                </nav>
            </footer>
        </div>
        // </LayoutBackground>
    )
}

export default Footer