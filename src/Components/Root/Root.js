import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";

const Root = () => {
  return (
    <div>
      <Outlet />
      <NavigationBar />
    </div>
  )
};

export default Root;