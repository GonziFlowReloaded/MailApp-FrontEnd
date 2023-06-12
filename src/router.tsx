import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contactos from "./pages/Contactos";
import Ajustes from "./pages/Ajustes";
import Redactar from "./pages/Redactar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },

      {
        path: "/redactar",
        element: <Redactar/>,
      },

   

      {
        path: "/contactos",
        element: <Contactos />,
      },

      {
        path: "/ajustes",
        element: <Ajustes />,
        
      },

      
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },

      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
