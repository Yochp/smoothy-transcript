import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

import { wordsPerRow } from "../../consts";
import { Word } from "../../types/dataTypes";
import { TranscriptWord } from "../transcriptWord/TranscriptWord";
import { TranscriptContainerStyle } from "../transcriptContainerStyle/TranscriptContainerStyle";
import {
  calculateCurrentRowStartIndex,
  findActiveWordIndex,
} from "./TranscriptDisplayUtils";

interface TranscriptDisplayProps {
  words: Word[];
  currentTime: number;
}

const TranscriptDisplay: React.FC<TranscriptDisplayProps> = ({
  words,
  currentTime,
}) => {
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  useEffect(() => {
    const index = findActiveWordIndex(currentTime, words);
    if (index !== -1) {
      setCurrentWordIndex(index);
    }
  }, [currentTime, words]);

  const currentRowStartIndex = calculateCurrentRowStartIndex(
    currentWordIndex,
    wordsPerRow
  );
  const currentRowEndIndex = currentRowStartIndex + wordsPerRow;

  return (
    <TranscriptContainerStyle>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {words
          .slice(currentRowStartIndex, currentRowEndIndex)
          .map((word, index) => (
            <TranscriptWord
              key={currentRowStartIndex + index}
              ref={(el) =>
                (wordRefs.current[currentRowStartIndex + index] = el)
              }
              word={word}
              isActive={currentRowStartIndex + index === currentWordIndex}
            />
          ))}
      </Box>
    </TranscriptContainerStyle>
  );
};

export { TranscriptDisplay };
