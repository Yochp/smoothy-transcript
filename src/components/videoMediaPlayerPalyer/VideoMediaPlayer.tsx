import { Box, styled } from "@mui/material";
import React, { useEffect, useRef } from "react";

interface VideoMediaPlayerProps {
  src: string;
  onTimeUpdate: (time: number) => void;
}

const StyledVideo = styled("video")(({ theme }) => ({
  width: "100%",
  height: "auto",
  maxHeight: "50vh",
  borderRadius: "8px",
  boxShadow: theme.shadows[3],
  border: `2px solid ${theme.palette.divider}`,
}));

const VideoMediaPlayer: React.FC<VideoMediaPlayerProps> = ({
  src,
  onTimeUpdate,
}) => {
  const audioRefToVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const audio = audioRefToVideo.current;
    if (audio) {
      const handleTimeUpdate = () => onTimeUpdate(audio.currentTime);
      audio.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [onTimeUpdate]);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 4,
        mb: 4,
      }}
    >
      <StyledVideo ref={audioRefToVideo} controls src={src} />
    </Box>
  );
};

export { VideoMediaPlayer };
