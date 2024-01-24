'use client'
import { DEFAULT_FOLDER_NAME } from '@/app/commen/CommenName';
import { UploadType } from '@/app/commen/CommenTypeDefination';
import { UploadImage } from '@/app/upload/uploadService';
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';

interface cloudinaryresult {
    resource_type: string;
    folder: string;
    public_id: string;
    secure_url: string;
}
interface props {
    uploadFolderId: string | undefined;
    publicId: string;
    folderName: string | undefined;
    setpublicId: Function;
    des: string | undefined;
}
const UploadType: React.FC<props> = (props) => {
    const { publicId, setpublicId, uploadFolderId, folderName, des } = props
    console.log(uploadFolderId, 'uploadFolderId')
    const uploadFun = async (req: UploadType) => {
        const res = await UploadImage(req)
        return res
    }

    return (
        <>
            <CldUploadWidget key={uploadFolderId} uploadPreset={uploadFolderId} onUpload={(result, widget) => {
                if (result.event !== "success") return ""
                const info = result.info as cloudinaryresult
                setpublicId(info.public_id)
                console.log(result, uploadFolderId, 'result')
                const payload = {
                    type: folderName ? folderName : 'default',
                    fileType: info.resource_type,
                    secureUrl: info.secure_url,
                    publicId: info.public_id,
                    des: des,
                    uploadImagInfo: info,
                }
                uploadFun(payload)

            }}>
                {({ open, }) =>
                    <button className='btn btn-primary' onClick={() => open()}>Upload</button>
                }
            </CldUploadWidget>
            {/* {publicId && <CldImage src={publicId} width={300} height={150} alt='' />} */}
        </>

    )
}
export default UploadType