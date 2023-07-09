import React, { useEffect, useRef, useState } from "react";
import styles from "./Bars.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Categories from "../../../features/categories/Categories";

const Bars = () => {
  const [clicked, setClicked] = useState(false);
  const barsIconRef = useRef();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleClickOutside = (event) => {
    if (barsIconRef.current && !barsIconRef.current.contains(event.target)) {
      setClicked(false);
    }
  };

  useEffect(() => {
    if (clicked) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [clicked]);

  return (
    <div
      className={styles.BarsContainer}
      onClick={handleClick}
      ref={barsIconRef}
    >
      <div
        className={styles.BarsIcon}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div
        className={`${styles.CategoriesContainer} ${clicked ? styles.Active : ""
          }`}
      >
        {clicked && <Categories />}
      </div>
    </div>
  );
};

export default Bars;
