import React, { ReactNode, createContext, useState } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export const Tema = createContext({
  darkMode: false,
  darkModeOn: () => {},
  lightMode: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeOn = () => {
    setDarkMode(true);
  };

  const lightMode = () => {
    setDarkMode(false);
    };

  return (
    <Tema.Provider value={{ darkMode, darkModeOn, lightMode }}>
      {children}
    </Tema.Provider>
  );
};
