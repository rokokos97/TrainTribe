import { createTheme, ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2"
    },
    secondary: {
      main: "#dc004e"
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff"
    }
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500
    }
  },
  shape: {
    borderRadius: 12
  }
};

const theme = createTheme(themeOptions);

export default theme;
