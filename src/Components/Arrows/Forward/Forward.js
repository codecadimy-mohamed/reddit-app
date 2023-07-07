import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./Forward.module.css";

const Forward = ({ handleClick }) => {

  return (
      <div className={styles.ForwardContainer} onClick={() => handleClick()}>
        <FontAwesomeIcon icon={faArrowLeft} rotation={180} />
      </div>
  )
}

export default Forward;