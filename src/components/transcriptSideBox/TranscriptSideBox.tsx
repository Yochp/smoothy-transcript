import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";

import { Word } from "../../types/dataTypes";
import { isWordActive } from "../transcriptDisplay/TranscriptDisplayUtils";

interface TranscriptSideBoxProps {
  words: Word[];
  currentTime: number;
}

const TranscriptSideBox: React.FC<TranscriptSideBoxProps> = ({
  words,
  currentTime,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeWordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (activeWordRef.current && containerRef.current) {
      const container = containerRef.current;
      const activeWord = activeWordRef.current;
      container.scrollTo({
        top: activeWord.offsetTop - container.offsetTop,
        behavior: "smooth",
      });
    }
  }, [currentTime]);

  return (
    <Box
      ref={containerRef}
      sx={{
        p: 2,
        border: "1px solid lightgray",
        borderRadius: "8px",
        maxHeight: "20vh",
        overflowY: "auto",
        backgroundColor: "white",
      }}
    >
      {words.map((word, index) => {
        const isActive = isWordActive(currentTime, word);
        return (
          <Typography
            key={index}
            ref={isActive ? activeWordRef : null}
            component="span"
            sx={{
              display: "inline-block",
              backgroundColor: isActive ? "lightblue" : "transparent",
              padding: "0 4px",
              borderRadius: "4px",
              marginRight: "4px",
              marginBottom: "4px",
            }}
          >
            {word.text}
          </Typography>
        );
      })}
    </Box>
  );
};

export { TranscriptSideBox };
