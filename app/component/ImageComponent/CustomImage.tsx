// components/MyImage.tsx
import Image, { ImageProps } from 'next/image';

interface MyImageProps extends Omit<ImageProps, 'width' | 'height'> {
  // Add any additional custom props here
  width?: number | `${number}`; // Update this line
  height?: number | `${number}`;
}

const MyImage: React.FC<MyImageProps> = ({ ...rest }) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...rest} />;
};

export default MyImage;
