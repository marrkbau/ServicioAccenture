import React from "react";
import { Outlet } from "react-router-dom";
import NavBarComponent from "../../components/NavbarComponent";

const MainLayout = () => {
  return (
    <>
      <NavBarComponent />
      <Outlet />
    </>
  );
};

export default MainLayout;
