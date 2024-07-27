import React from "react";
import { Box } from "@mui/material";

import { Word } from "../../types/dataTypes";
import { VideoMediaPlayer } from "../videoMediaPlayerPalyer/VideoMediaPlayer";
import { TranscriptDisplay } from "../transcriptDisplay/TranscriptDisplay";

interface VideoMediaPlayerContainerProps {
  audioUrl: string;
  words: Word[];
  currentTime: number;
  setCurrentTime: (time: number) => void;
}

const VideoMediaPlayerContainer: React.FC<VideoMediaPlayerContainerProps> = ({
  audioUrl,
  words,
  setCurrentTime,
  currentTime,
}) => {
  return (
    <>
      <Box sx={{ position: "relative", width: "800px", margin: "auto" }}>
        <VideoMediaPlayer src={audioUrl} onTimeUpdate={setCurrentTime} />
        <TranscriptDisplay words={words} currentTime={currentTime} />
      </Box>
    </>
  );
};

export { VideoMediaPlayerContainer };
