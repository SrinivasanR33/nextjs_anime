"use client";
// components/VideoPlayer.tsx
import { CldVideoPlayer, getCldVideoUrl } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import imag from "../../../public/S.png";


interface VideoPlayerProps {
  src: string;
  width?: string | number;
  height?: string | number;
  controls?: boolean;
  autoPlay: boolean // Auto play if this is the current video
  onPlay: CallableFunction // Set as current video when it starts playing
  onPause: CallableFunction // Reset current video when it pauses
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  width = "640px",
  height = "360px",
  controls = true, autoPlay, onPause, onPlay
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
      autoPlay={autoPlay}
      onPause={onPause}
      onPlay={onPlay}
      logo={{
        imageUrl: imag.src,
        // onClickUrl: 'https://spacejelly.dev'
      }}
    // controlBar={}
    />
  );
};

export default VideoPlayer;
