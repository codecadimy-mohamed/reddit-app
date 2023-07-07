import React from "react";
import PostPendingHeader from "./PostPendingHeader/PostPendingHeader";
import PostPendingTitle from "./PostPendingTitle/PostPendingTitle";
import styles from "./PostPending.module.css";
import PostPendingVisual from "./PostPendingVisual/PostPendingVisual";

const PostPending = () => {
  return (
    <div className={styles.PostContainer}>
      <PostPendingHeader />
      <PostPendingVisual />
      <PostPendingTitle />
    </div>
  );
};

export default PostPending;
