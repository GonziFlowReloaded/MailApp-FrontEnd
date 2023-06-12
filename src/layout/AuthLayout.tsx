import { Outlet } from "react-router-dom";
import portada from "../assets/img/portada.webp";

const AuthLayout = () => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Whenever the user explicitly chooses light mode
  localStorage.theme = "light";

  // Whenever the user explicitly chooses dark mode
  localStorage.theme = "dark";

  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem("theme");
  return (
    <>
      <div
        style={{ backgroundImage: `url(${portada})` }}
        className="no-repeat bg-cover bg-top relative h-screen"
      >
        <div className="w-full h-full flex justify-center items-center backdrop-blur-sm bg-gray-900 bg-opacity-50">
          <div className=" h-screen flex justify-center items-center ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
