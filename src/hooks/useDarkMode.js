import { useEffect, useState } from "react";

const useDarkMode = () => {
  const storedPreference = localStorage.getItem("colorScheme");

  const [isDarkMode, setIsDarkMode] = useState(storedPreference === "dark");

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("colorScheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("colorScheme", "light");
    }
  }, [isDarkMode]);

  const switchTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return { isDarkMode, switchTheme };
};

export default useDarkMode;
