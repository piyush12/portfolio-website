import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const PREFIX = "PIYUSH-PORTFOLIO";

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(() => {
    const getTheme =
      JSON.parse(localStorage.getItem(`${PREFIX}-theme`)) || null;
    return getTheme || "dark-mode";
  });

  useEffect(() => {
    localStorage.setItem(`${PREFIX}-theme`, JSON.stringify(theme));
    document.body.classList.remove("dark-mode");
    document.body.classList.remove("light-mode");
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    console.log("theme", theme);
    const newTheme = theme === "dark-mode" ? "light-mode" : "dark-mode";
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
      {...props}
    />
  );
};

export { ThemeContext, ThemeContextProvider };
