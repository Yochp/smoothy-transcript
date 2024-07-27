import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";

import { verbitLogoUrl } from "../../consts";

const Header: React.FC = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <img
            width="127"
            height="40"
            alt="Verbit-logo-redesign"
            src={verbitLogoUrl}
            loading="lazy"
          ></img>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { Header };
