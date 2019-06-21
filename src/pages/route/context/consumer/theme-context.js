import React from "react";
import {themes} from "../provider/theme-context";

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {
    }
});
