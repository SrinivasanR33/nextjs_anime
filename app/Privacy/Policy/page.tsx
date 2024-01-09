import React from 'react'
import "./styles.module.css"
function Policy() {
    const styleH = "font-bold underline"
    const styleP = "break-words w-1/1"
    return (
        <div className='max-h-screen min-w-full flex justify-center pt-2'>
            <div className=''>
                <div>

                    <h1 className={styleH}>Privacy Policy</h1>
                    <p className={styleP}>We respect your privacy and are committed to protecting your personal information. This Privacy Policy informs you about how we collect, use, and safeguard your data when you visit our website.</p>

                    <h2 className={styleH}>Information We Collect</h2>

                    <p className={styleP}>We may collect personal information, such as your name and email address, when you voluntarily submit it through our website forms.</p>

                    <h2 className={styleH}>How We Use Your Information</h2>

                    <p className={styleP}>We use the information you provide to respond to your inquiries, send newsletters, and improve our website.</p>

                    <h2 className={styleH}>Cookies</h2>

                    <p className={styleP}>We use cookies to enhance your experience on our website. You can adjust your browser settings to block cookies, but this may affect your ability to use some features.</p>

                    <h2 className={styleH}>Security</h2>

                    <p className={styleP}>We take reasonable measures to protect your personal information, but no method of transmission over the internet or electronic storage is completely secure.</p>

                    <h2 className={styleH}>Third-Party Links</h2>

                    <p className={styleP}>Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their privacy policies.</p>

                    <h2 className={styleH}>Changes to This Policy</h2>

                    <p className={styleP}>We may update our Privacy Policy, and any changes will be posted on this page.</p>

                    <h2 className={styleH}>Contact Us</h2>

                    <p className={styleP}>If you have questions about our Privacy Policy, please <a href="mailto:your@email.com">contact us</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default Policy