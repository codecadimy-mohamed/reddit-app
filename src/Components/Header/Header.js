import React from "react";
import styles from "./Header.module.css";
import Logo from "./Logo/Logo";
import Bars from "./Bars/Bars";

const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
      <Logo />
      <Bars />
    </div>
  )
}

export default Header;