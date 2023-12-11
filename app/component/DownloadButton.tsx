"use Client"

// components/DownloadImage.tsx
import React, { useState } from 'react';
import { FaDownload } from "react-icons/fa6";
import { CLOUD_NAME } from '../commen/CommenName';
interface publictype {
    publicId: string
}
const DownloadImage: React.FC<publictype> = (props) => {
    const { publicId } = props

    const handleDownload = () => {
        try {
            // Replace 'your-cloud-name' with your actual Cloudinary cloud name
            const cloudName = CLOUD_NAME;
            const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${publicId}`;

            // Create a Cloudinary instance
            //   const cl = new cloudinary.Cloudinary({ cloud_name: cloudName });

            // Fetch the image from Cloudinary using fetch API
            fetch(imageUrl)
                .then((response) => response.blob())
                .then((blob) => {
                    // Create a blob URL for the image
                    const blobUrl = URL.createObjectURL(blob);

                    // Create a link element and trigger the download
                    const link = document.createElement('a');
                    link.href = blobUrl;
                    link.download = `${publicId}.jpg`;
                    link.click();

                    // Revoke the blob URL to free up resources
                    URL.revokeObjectURL(blobUrl);
                })
                .catch((error) => console.error('Error:', error));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <button className='btn btn-ghost  btn-square btn-xs' onClick={handleDownload}><FaDownload /></button>
        </div>
    );
};

export default DownloadImage;
