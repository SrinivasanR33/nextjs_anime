// components/DownloadImage.tsx
import React from 'react';
import { FaDownload } from 'react-icons/fa6';
import { CLOUD_NAME } from '../commen/CommenName';

interface publictype {
    publicId: string;
    type: string;
}

const DownloadImage: React.FC<publictype> = (props) => {
    const { publicId, type } = props;
    console.log(type)
    const handleDownload = () => {
        try {
            const cloudName = CLOUD_NAME;
            const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${publicId}`;

            // For video download, modify the URL and filename accordingly
            const isVideo = type === 'video';
            const fileExtension = isVideo ? 'mp4' : 'jpg';
            const downloadFilename = isVideo ? `downloaded-video-${publicId}.${fileExtension}` : `${publicId}.${fileExtension}`;

            fetch(imageUrl)
                .then((response) => response.blob())
                .then((blob) => {
                    const blobUrl = URL.createObjectURL(blob);

                    const link = document.createElement('a');
                    link.href = blobUrl;
                    link.download = downloadFilename;
                    link.click();

                    URL.revokeObjectURL(blobUrl);
                })
                .catch((error) => console.error('Error:', error));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <button className='btn btn-ghost btn-square btn-xs' onClick={handleDownload}>
                <FaDownload />
            </button>
        </div>
    );
};

export default DownloadImage;
