import React from "react";

import styles from "./CommentElementBody.module.css";

const CommentElementBody = ({ body }) => {
  return (
    <div className={styles.commentElementBody}>
      <p>{body}</p>
    </div>
  )
}

export default CommentElementBody;