import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <div className={styles.LogoContainer}>
      <Link to="/" >
        <img className={styles.logo} src="https://cdn.worldvectorlogo.com/logos/reddit-4.svg" alt="reddit log" />
      </Link>
    </div>
  )
}

export default Logo;