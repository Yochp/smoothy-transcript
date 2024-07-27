import React from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";

import { TranscriptSideBox } from "../transcriptSideBox/TranscriptSideBox";
import { Word } from "../../types/dataTypes";

interface TranscriptSideBoxContainerProps {
  words: Word[];
  currentTime: number;
}

const TranscriptSideBoxContainer: React.FC<TranscriptSideBoxContainerProps> = ({
  words,
  currentTime,
}) => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        sx={{ mx: 2, color: "primary.dark" }}
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Toggle Text Box"
      />
      {checked && <TranscriptSideBox words={words} currentTime={currentTime} />}
    </Box>
  );
};

export { TranscriptSideBoxContainer };
