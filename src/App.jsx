// App.js
import "./App.css";
import React from "react";
import Compras from "./pages/compras/Compras";
import Clientes from "./pages/clientes/Clientes";
import MainLayout from "./pages/layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Compras />,
        },
        {
          path: "/clientes",
          element: <Clientes />,
        },
        {
          path: "/compras",
          element: <Compras />,
        },
      ],
    },
    {
      path:"/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <h1>404</h1>,
    }
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
