import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./layouts/Layout";

import MailManager from "./pages/MailManager";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/mail",
        element: <MailManager />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

export default Router;
