import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { MailProvider } from "./context/MailProvider";
import { AuthProvider } from "./context/AuthProvider";
import "./index.css";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <MailProvider>
        <RouterProvider router={router} />
      </MailProvider>
    </AuthProvider>
  </React.StrictMode>
);
