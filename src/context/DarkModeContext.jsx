import React, { createContext, useState } from "react";

// Buat context untuk Dark Mode
export const DarkModeContext = createContext();

// Buat Dark Mode Provider
export const DarkModeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleDarkMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <DarkModeContext.Provider value={{ theme, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
