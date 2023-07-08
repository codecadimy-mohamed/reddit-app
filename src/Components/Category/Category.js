import React from "react";
import styles from "./Category.module.css";

const Category = ({ categoryInf, index, handleClick }) => {
  const {
    subreddit,
    profileImage,
    category,
  } = categoryInf;

  return (
    <div className={styles.CategoryContainer} onClick={() => handleClick(index)}>
      <div className={styles.profileImage}>
        <img src={profileImage} alt=""/>
      </div>
      <div className={styles.subreddit}>
        {subreddit}
      </div>
      <div className={styles.category}>
        {category}
      </div>
    </div>
  )
}

export default Category;