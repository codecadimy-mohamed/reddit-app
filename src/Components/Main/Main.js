import React from "react";
import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
};

export default Main;