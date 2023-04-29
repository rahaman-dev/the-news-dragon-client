import React from "react";
import Menu from "../Pages/Sheared/Menu/Menu";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <Menu></Menu>
      <Outlet></Outlet>
    </div>
  );
};

export default UserLayout;
