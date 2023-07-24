import React from "react";

import styles from "./CommentsContainer.module.css";
import CommentElement from "./commentElement/CommentElement";
import CommentElementPending from "./commentElementPending/CommentElementPending";

const CommentsContainer = ({
  postsComments,
  postsCommentsPending,
  postsCommentsRejected
}) => {
  console.log(postsComments);
  if (postsCommentsPending) {
    return (
      <div className={styles.commentsContainer}>
        <CommentElementPending />
        <CommentElementPending />
        <CommentElementPending />
      </div>
    )
  } else {
    return (
      <div className={styles.commentsContainer}>
        {
          postsComments.map((comment, index) => {
            return <CommentElement comment={comment} index={index} />
          })
        }
      </div>
    )
  }
}

export default CommentsContainer;