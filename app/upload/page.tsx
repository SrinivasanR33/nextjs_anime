'use client'
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';

interface cloudinaryresult {
    public_id: string
}
const UploadPage = () => {
    const [publicId, setpublicId] = useState("")

    return (
        <>
            {publicId && <CldImage src={publicId} width={300} height={150} alt='' />}
            <CldUploadWidget uploadPreset="vxq3b8ev" onUpload={(result, widget) => {
                if (result.event !== "success") return ""
                const info = result.info as cloudinaryresult
                setpublicId(info.public_id)
                console.log(result, 'result')
            }}>
                {({ open, }) =>
                    <button className='btn btn-primary' onClick={() => open()}>Upload</button>
                }
            </CldUploadWidget>
        </>

    )
}
export default UploadPage