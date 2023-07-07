import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import styles from "./Root.module.css";

const Root = () => {
  return (
    <div className={styles.RootContainer}>
      <Outlet />
      <NavigationBar />
    </div>
  )
};

export default Root;