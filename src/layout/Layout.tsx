import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  const navigate = useNavigate();
  const nombre = localStorage.getItem("nombre");

  if (!nombre) {
    navigate("/auth/login");
    return null;
  }

  return (
    <>
      <div className="md:flex ">
        <Sidebar />

        <main className="flex-1 bg-gray-100 dark:bg-gray-700 overflow-y-auto transition duration-500 ease-in-out">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;

