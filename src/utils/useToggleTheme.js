import { useContext } from "react";

import { ThemeContext } from "../context/themeContext";

function useToggleTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Please Wrap Context inside Theme Context Provider");
  }

  return context;
}

export default useToggleTheme;
