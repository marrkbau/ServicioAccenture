import "./App.css";
import React from "react";
import Compras from "./pages/compras/Compras";
import NavBarComponent from "./components/NavbarComponent";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Clientes from "./pages/clientes/Clientes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/compras",
      element: <Compras />,
    },
    {
      path: "/clientes",
      element: <Clientes />,
    },
  ]);
  return (
    <>
      <React.StrictMode>
        <NavBarComponent />,
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
}

export default App;
