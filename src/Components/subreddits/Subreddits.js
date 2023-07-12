import React from "react";
import styles from "./Subreddits.module.css";
import Subreddit from "../subreddit/Subreddit";
import PostPendingHeader from "../PostPending/PostPendingHeader/PostPendingHeader";

const Subreddits = ({ subreddits, subredditsPending, subredditsRejected, handleSelectedSubreddit }) => {

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
          return (
            <Subreddit
              subreddit={subreddit}
              index={index}
              handleSelectedSubreddit={handleSelectedSubreddit}
            />
          )

        })
      }
    </div>
  )
}

export default Subreddits;