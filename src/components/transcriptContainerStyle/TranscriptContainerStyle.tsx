import React from "react";
import { Box } from "@mui/material";

interface TranscriptContainerStyleProps {
  children: React.ReactNode;
}

const TranscriptContainerStyle: React.FC<TranscriptContainerStyleProps> = ({
  children,
}) => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "white",
        padding: 1,
        borderRadius: 1,
        textAlign: "center",
        maxHeight: "20vh",
        overflowY: "auto",
        wordWrap: "break-word",
        whiteSpace: "normal",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};

export { TranscriptContainerStyle };
