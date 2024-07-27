import React from "react";
import { Typography } from "@mui/material";

import { Word } from "../../types/dataTypes";

interface TranscriptWordProps {
  word: Word;
  isActive: boolean;
  ref: React.Ref<HTMLSpanElement>;
}

const TranscriptWord = React.forwardRef<HTMLSpanElement, TranscriptWordProps>(
  ({ word, isActive }, ref) => {
    return (
      <Typography
        component="span"
        ref={ref}
        sx={{
          padding: "2px 5px",
          margin: "2px",
          borderRadius: "4px",
          ...(isActive && {
            border: "1px solid gray",
            fontWeight: "bold",
            borderRadius: "10px",
            color: "greay",
          }),
        }}
      >
        {word.text}
      </Typography>
    );
  }
);

export { TranscriptWord };
