"use client";
// components/VideoPlayer.tsx
import { CldVideoPlayer, getCldVideoUrl } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

interface VideoPlayerProps {
  src: string;
  width?: string | number;
  height?: string | number;
  controls?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  width = "540",
  height = "160",
  controls = true,
}) => {
  const url = getCldVideoUrl({
    width: width,
    height: height,
    src: src,
  });
  return (
    <CldVideoPlayer
      src={url}
      width={width}
      height={height}
      controls={controls}
    // controlBar={}
    />
  );
};

export default VideoPlayer;
