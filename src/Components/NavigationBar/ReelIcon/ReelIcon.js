import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import styles from "./ReelIcon.module.css";

const ReelIcon = () => {
  return (
      <div className={styles.ReelIconContainer}>
        <Link to="reel">
        <FontAwesomeIcon icon={faCirclePlay} style={{color: 'black'}}/>
        </Link>
      </div>
  )
}

export default ReelIcon;