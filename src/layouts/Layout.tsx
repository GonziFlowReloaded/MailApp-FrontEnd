import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const Layout = () => {
  return (
    <div className="flex  h-screen flex-col-reverse  md:flex-row md:items-center md:justify-center ">
      <Sidebar />
      <div className="h-[100vh] w-full   bg-[#f7f6fb]  shadow-xl md:h-[700px] md:w-[75%]  md:rounded-br-3xl md:rounded-tr-3xl">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
