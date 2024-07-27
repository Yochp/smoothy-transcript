import React from "react";
import { Box, Container } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        width: "100%",
        left: 0,
        bottom: 0,
        position: "fixed",
        backgroundColor: "primary.main",
      }}
    >
      <Container maxWidth="sm"></Container>
    </Box>
  );
};

export { Footer };
