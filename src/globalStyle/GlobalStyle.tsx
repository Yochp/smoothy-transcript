import React from "react";
import { GlobalStyles as MUIGlobalStyles } from "@mui/material";

const GlobalStyles = () => (
  <MUIGlobalStyles
    styles={{
      body: {
        background: "linear-gradient(to top, white,  #c5cff0)",
        fontFamily: "Roboto, sans-serif",
        height: "100vh",
      },
    }}
  />
);

export default GlobalStyles;
