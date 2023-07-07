import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./Forward.module.css";
import { useNavigate } from "react-router";

const Forward = ({ handleClick }) => {

  const navigate = useNavigate();
  
  const forward = () => {
    navigate(1);
  }

  return (
      <div className={styles.ForwardContainer} onClick={() => forward()}>
        <FontAwesomeIcon icon={faArrowLeft} rotation={180} />
      </div>
  )
}

export default Forward;