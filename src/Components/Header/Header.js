import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.searchIcon}>
        <Link to="search">
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: 'black'}}/>
        </Link>
      </div>
    </div>
  )
}

export default Header;