import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";
import HomeIcon from "./HomeIcon/HomeIcon";
import SearchIcon from "./SearchIcon/SearchIcon";
import ReelIcon from "./ReelIcon/ReelIcon";

const NavigationBar = () => {
  return (
    <div className={styles.NavigationBarContainer}>
      <NavLink to="/" className={ ({ isActive }) => isActive ? "navlink-active" : "" }><HomeIcon /></NavLink>
      <NavLink to="/search" className={ ({ isActive }) => isActive ? "navlink-active" : "" }><SearchIcon /></NavLink>
      <NavLink to="/real" className={ ({ isActive }) => isActive ? "navlink-active" : "" }><ReelIcon /></NavLink>
    </div>
  )
}

export default NavigationBar;