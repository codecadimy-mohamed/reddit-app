import React, { useState } from "react";
import styles from "./Bars.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Categories from "../../../features/categories/Categories";

const Bars = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className={styles.BarsContainer}>
      <div className={styles.BarsIcon} onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={`${styles.CategoriesContainer} ${clicked ? styles.Active : ""}`}>
        {clicked && <Categories />}
      </div>
    </div>
  );
};

export default Bars;
