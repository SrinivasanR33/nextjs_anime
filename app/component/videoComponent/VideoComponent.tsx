"use client"
// components/VideoPlayer.tsx
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

interface VideoPlayerProps {
    src: string;
    width?: string | number;
    height?: string | number;
    controls?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    src,
    width = '540',
    height = '160',
    controls = true,
}) => {
    return (
        <CldVideoPlayer
            src={src}
            width={width}
            height={height}
        // controls={controls}
        />
    );
};

export default VideoPlayer;
