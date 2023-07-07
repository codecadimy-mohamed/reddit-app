import React from "react";
import styles from './PostPendingTitle.module.css';

const PostPendingTitle = () => {


  return (
    <div className={styles.PostPendingTitleContainer}>
      <div className={styles.title}></div>
      <div className={styles.subtitle}></div>
    </div>
  );
}

export default PostPendingTitle;