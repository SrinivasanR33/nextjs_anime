import React from 'react';
import { FaDownload } from 'react-icons/fa6';
import { CLOUD_NAME } from '../commen/CommenName';

interface PublicType {
    publicId: string;
    type: string;
}

const DownloadImage: React.FC<PublicType> = (props) => {
    const { publicId, type } = props;

    const handleDownload = () => {
        try {
            const cloudName = CLOUD_NAME;
            let fileExtension = '';
            let downloadFilename = '';

            // Determine file extension and filename based on the file type
            if (type === 'video') {
                fileExtension = 'mp4';
                downloadFilename = `downloaded-video-${publicId}.${fileExtension}`;
            } else {
                fileExtension = 'jpg';
                downloadFilename = `${publicId}.${fileExtension}`;
            }

            // Construct Cloudinary URL for download
            const imageUrl = `https://res.cloudinary.com/${cloudName}/${type}/upload/${publicId}.${fileExtension}?fl_attachment=true`;

            // Fetch the file and trigger download
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
