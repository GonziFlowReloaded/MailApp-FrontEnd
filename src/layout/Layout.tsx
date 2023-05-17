import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <>
      <div className="md:flex ">
        <Sidebar />

        <main className="flex-1 bg-gray-100 ">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
