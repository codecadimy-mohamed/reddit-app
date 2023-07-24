import React from "react";

import styles from "./CommentElementHeader.module.css";
import { creationTime } from "../../../../PostHeader/PostHeader";

const CommentElementHeader = ({ profileName, created, awardings }) => {

  return (
    <div className={styles.commentHeaderContainer}>

      <div
        className={styles.profileImage}
        style={{
          // backgroundImage: `url(${profileImage})`,
        }}
      >
        {/* here profile image lies */}
      </div>

      <div className={styles.profileName}>
        {profileName}
      </div>

      <div className={styles.creationDate}>
        {creationTime(created)}
      </div>

    </div>
  )
}

export default CommentElementHeader;