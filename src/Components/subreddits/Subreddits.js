import React from "react";
import styles from "./Subreddits.module.css";
import Subreddit from "../subreddit/Subreddit";
import PostHeader from "../Post/PostHeader/PostHeader";
import PostPendingHeader from "../PostPending/PostPendingHeader/PostPendingHeader";

const Subreddits = ({ subreddits, subredditsPending, subredditsRejected }) =>  {

  if (subredditsPending) {
    return (
      <>
        <PostPendingHeader />
        <PostPendingHeader />
        <PostPendingHeader />
      </>
    )
  }
  return (
    <div className={styles.subredditsContainer}>
      {
        subreddits.map((subreddit, index) => {
          return <Subreddit subreddit={subreddit} index={index} />
        })
      }
    </div>
  )
}

export default Subreddits;