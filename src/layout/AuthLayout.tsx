import { Outlet } from "react-router-dom";
import portada from "../assets/img/portada.webp";

const AuthLayout = () => {
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
