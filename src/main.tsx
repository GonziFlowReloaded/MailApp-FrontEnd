import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { MailProvider } from "./context/MailProvider";
import "./index.css";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MailProvider>
      <RouterProvider router={router} />
    </MailProvider>
  </React.StrictMode>
);
