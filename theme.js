import { createContext,useContext } from "react";

const ThemeContext = createContext({
    thememode : "light",
    darkTheme : () => {},
    lightTheme : () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
    return useContext(ThemeContext)
}
