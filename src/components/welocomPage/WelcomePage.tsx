import React from "react";
import { Button, Box, Typography } from "@mui/material";

interface WelcomePageProps {
  setShowHomePage: (showHomePage: boolean) => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ setShowHomePage }) => {
  const handleClickGetRandomMedia = () => setShowHomePage(true);

  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontFamily: "Nunito, sans-serif",
          color: "#4f3daf",
          letterSpacing: 3,
        }}
      >
        Welcome to Smoothy Transcript
      </Typography>
      <Button
        variant="contained"
        onClick={handleClickGetRandomMedia}
        sx={{ mt: 8, textTransform: "none", backgroundColor: "#5248f9" }}
        size="large"
      >
        Get Random Media
      </Button>
    </Box>
  );
};

export { WelcomePage };
