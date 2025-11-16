import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      const theme = localStorage.getItem("theme");
      return theme ? JSON.parse(theme) : "light";
    } catch (err) {
      console.error(err);
      return "light";
    }
  });
  useEffect(() => {
    const root = window.document.documentElement;
    root.className = "";
    localStorage.setItem("theme", JSON.stringify(theme));
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
