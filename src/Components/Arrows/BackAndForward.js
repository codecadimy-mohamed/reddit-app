import React from "react";
import styles from "./BackAndForward.module.css";
import Backward from "./Backward/Backward";
import Forward from "./Forward/Forward";

const BackAndForward = () => {

  return (
    <div className={styles.BackAndForwardContainer}>
      <Backward />
      <Forward />
    </div>
  )
}

export default BackAndForward;