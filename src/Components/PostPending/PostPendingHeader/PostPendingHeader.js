import React from "react";
import styles from './PostPendingHeader.module.css';

const PostPendingHeader = () => {
  return (
    <div className={styles.PostPendingHeaderContainer}>
      <div className={styles.profileImage}></div>
      <div className={styles.profileName}>
        <div className={styles.firstChild}></div>
        <div className={styles.lastChild}></div>
      </div>
    </div>
  )
};

export default PostPendingHeader;