
import React from 'react'
import { companyName } from '../commen/CommenName'
import imag from "../../public/dev/dev1.webp"

import Image from 'next/image'
interface Props {
    image: any;
    content: String
}
const HomePage1 = (props: Props) => {
    const { image, content } = props
    return (
        <div className="h-2/4 bg-base-200 px-5 py-14 ">
            <div className="flex justify-center items-center gap-3">
                <div>
                    <h1 className="text-5xl font-bold">Software Development</h1>
                    <p className="py-6">{content || "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
                <Image src={image} className="w-3/5 h-3/5" alt='hi' />
            </div>
        </div>
    )
}

export default HomePage1