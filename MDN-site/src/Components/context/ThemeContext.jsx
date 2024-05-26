
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [themeChange, setThemeChange] = useState('light');

    const toggleTheme = () => {
        setThemeChange(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ themeChange, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
