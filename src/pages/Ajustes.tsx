//@ts-nocheck

import { useState, useEffect } from "react";

const Ajustes = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.theme = theme;
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-[#2e8efd] mt-5">
        Ajustes del usuario
      </h1>

      <div className="mt-5">
        <button
          className="bg-green-300 p-4 rounded-3xl"
          onClick={handleTheme}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Ajustes;
