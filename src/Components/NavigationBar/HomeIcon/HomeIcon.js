import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import styles from "./HomeIcon.module.css";

const HomeIcon = () => {
  return (
      <div className={styles.HomeIconContainer}>
        <Link to="/">
        <FontAwesomeIcon icon={faHouse} style={{color: 'black'}}/>
        </Link>
      </div>
  )
}

export default HomeIcon;