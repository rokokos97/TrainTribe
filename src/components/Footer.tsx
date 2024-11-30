import React from "react";
import { Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <footer>
      <Typography
        variant="caption"
        color="textSecondary"
        align="center"
        sx={{ mt: 2 }}
      ></Typography>
    </footer>
  );
};

export default Footer;
