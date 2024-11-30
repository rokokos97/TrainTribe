import React, {
  createContext,
  useState,
  useMemo,
  ReactNode,
  useContext
} from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  PaletteMode
} from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import { IThemeContextProps } from "./interfaces/Theme";

const ThemeContext = createContext<IThemeContextProps | undefined>(undefined);

export const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [mode, setMode] = useState<PaletteMode>(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): IThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within ThemeContextProvider");
  }
  return context;
};

export default ThemeContextProvider;
