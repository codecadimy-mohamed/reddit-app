import React from "react";

import styles from "./CommentElement.module.css";
import CommentElementHeader from "./commentElementHeader/CommentElementHeader";

const CommentElement = ({ comment, index }) => {
  const data = comment.data;

  return (
    <div className={styles.commentContainer} key={index}>
      <CommentElementHeader
        profileName={data.author}
        created={data.created_utc}
        awardings={data.all_awardings}
      />
    </div>
  )
}

export default CommentElement;