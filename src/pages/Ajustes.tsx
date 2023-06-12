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

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-[#2e8efd] mt-5">
        Ajustes del usuario
      </h1>

      <button className="bg-green-300 p-4 rounded-3xl mt-5" onClick={handleTheme}>
        Dark Mode
      </button>
    </div>
  );
};

export default Ajustes;
