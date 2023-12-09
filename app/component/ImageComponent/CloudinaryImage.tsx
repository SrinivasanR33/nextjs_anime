// components/CloudinaryImage.tsx
import { CldImage } from 'next-cloudinary';
import Image from 'next/image';

interface CloudinaryImageProps {
    publicId: string;
    alt: string;
}

const CloudinaryImage: React.FC<CloudinaryImageProps> = ({ publicId, alt }) => {
    // Use the Cloudinary URL format
    // const imageUrl = `https://res.cloudinary.com/your-cloud-name/image/upload/${publicId}`;

    return <CldImage src={publicId} alt={alt} width={500} height={300} />;
};

export default CloudinaryImage;
