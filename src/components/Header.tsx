import React from "react";
import {
  Switch,
  Typography,
  FormControlLabel,
  Box,
  AppBar
} from "@mui/material";
import { useThemeContext } from "../ThemeContext";
const Header: React.FC = () => {
  const { toggleTheme, mode } = useThemeContext();

  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        padding: 2,
        borderRadius: 2
      }}
    >
      <Box display="flex" flex-direction="row" justifyContent="center">
        <Typography variant="h2" align="center">
          Train Tribe
        </Typography>
        <FormControlLabel
          sx={{ ml: 2, position: "absolute", right: "20px", top: "55px" }}
          control={
            <Switch
              checked={mode === "dark"}
              onChange={toggleTheme}
              color="primary"
              size="medium"
            />
          }
          label={
            <Typography sx={{ textTransform: "capitalize" }}>
              {mode} theme
            </Typography>
          }
        />
      </Box>
    </AppBar>
  );
};
export default Header;
