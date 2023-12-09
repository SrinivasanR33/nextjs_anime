// components/CustomImage.tsx
import NextImage, { ImageProps } from 'next/image';

interface CustomImageProps extends ImageProps {
  alt: string;
  defaultSize?: 'small' | 'medium' | 'large'; // Define your default sizes here
}

const sizeMap = {
  small: { width: 200, height: 150 },
  medium: { width: 400, height: 300 },
  large: { width: 800, height: 600 },
};

const CustomImage: React.FC<CustomImageProps> = ({ alt, defaultSize, ...props }) => {
  const dimensions = sizeMap[defaultSize || 'medium'];

  return <NextImage {...props} alt={alt} {...dimensions} />;
};

export default CustomImage;
