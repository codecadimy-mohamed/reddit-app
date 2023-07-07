import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import styles from "./SearchIcon.module.css";

const SearchIcon = () => {
  return (
      <div className={styles.SearchIconContainer}>
        <Link to="/search">
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: 'black'}}/>
        </Link>
      </div>
  )
}

export default SearchIcon;