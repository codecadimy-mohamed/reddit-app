import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./Backward.module.css";
import { useNavigate } from "react-router";

const Backward = ({ handleClick }) => {
  const navigate = useNavigate();

  const backward = () => {
    navigate(-1);
  }

  return (
      <div className={styles.BackwardContainer} onClick={() => backward()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
  )
}

export default Backward;