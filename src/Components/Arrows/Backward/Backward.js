import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./Backward.module.css";

const Backward = ({ handleClick }) => {

  return (
      <div className={styles.BackwardContainer} onClick={() => handleClick()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
  )
}

export default Backward;