import React from "react";
import { Alert, Box } from "@mui/material";

interface ErrorGenericElementProps {
  errorMassege: string;
}

const ErrorGenericElement: React.FC<ErrorGenericElementProps> = ({
  errorMassege,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Alert severity="error">{errorMassege}</Alert>
    </Box>
  );
};

export { ErrorGenericElement };
