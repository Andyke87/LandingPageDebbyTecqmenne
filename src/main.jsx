/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";

import App from "./App";
import './index.css';
import RootLayout from "./navigation/RootLayout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/Contactpage";
import Practical from "./pages/PracticalPage";
import ErrorPage from "./pages/error/ErrorPage";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      }, 
      {
        path: "/practical",
        element: <Practical />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter}>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </RouterProvider>
  </React.StrictMode>,
);
