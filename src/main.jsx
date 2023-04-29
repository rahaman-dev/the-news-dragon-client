import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import route from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  </React.StrictMode>
);
