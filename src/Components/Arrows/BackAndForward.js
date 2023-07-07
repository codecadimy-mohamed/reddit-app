import React from "react";
import { useNavigate } from "react-router";
import styles from "./BackAndForward.module.css";
import Backward from "./Backward/Backward";
import Forward from "./Forward/Forward";

const BackAndForward = () => {
  const navigate = useNavigate();

  const backward = () => {
    navigate(-1);
  }

  const forward = () => {
    navigate(1);
  }

  return (
    <div className={styles.BackAndForwardContainer}>
      <Backward handleClick={backward}/>
      <Forward handleClick={forward}/>
    </div>
  )
}

export default BackAndForward;