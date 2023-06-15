import React, { ReactNode, createContext, useState } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export const Tema = createContext({
  darkMode: false,
  darkModeOn: () => {},
  lightMode: () => {},
  english: false,
  changeLanguage: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [english, setEnglish] = useState(false);

  const changeLanguage = () => {
    setEnglish(!english);
  };

  const darkModeOn = () => {
    setDarkMode(true);
  };

  const lightMode = () => {
    setDarkMode(false);
    };

  return (
    <Tema.Provider value={{ darkMode, darkModeOn, lightMode, english, changeLanguage }}>
      {children}
    </Tema.Provider>
  );
};
