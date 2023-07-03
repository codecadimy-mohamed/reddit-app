import React from "react";
import PostHeader from "./PostHeader/PostHeader";
import styles from "./Post.module.css";

const Post = ({ post }) => {
  const { data } = post;
  const postHeaderData = {
    subreddit_name_prefixed: data.subreddit_name_prefixed,
    created_utc: data.created_utc,
  };

  return (
    <div className={styles.PostContainer}>
      <PostHeader postHeaderData={postHeaderData} />
    </div>
  );
};

export default Post;
