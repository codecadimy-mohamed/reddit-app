import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../Components/Post/Post";
import styles from './HomePosts.module.css';
import { getHomePosts, selectHomePosts, selectHomePostsPending, selectHomePostsRejected, incrementUpScore, decrementUpScore, incrementDownScore, decrementDownScore } from "./homePostsSlice";
import PostPending from "../../Components/PostPending/PostPending";
import { selectSelectedCategory } from "../categories/categoriesSlice";

function HomePosts() {
  const dispatch = useDispatch();

  const HomePosts = useSelector(selectHomePosts);
  const isPending = useSelector(selectHomePostsPending);
  const isRejected = useSelector(selectHomePostsRejected);

  const selectedCategory = useSelector(selectSelectedCategory);

  useEffect(() => {
    // Dispatch getHomePosts initially
    const {subreddit} = selectedCategory;

    dispatch(getHomePosts({endPoint: `/${subreddit}/.json`}));
  }, [selectedCategory]);

  const handleVote = (index, voteType, voteValue) => {
    if (voteType === "up") {
      if (voteValue) {
        dispatch(incrementUpScore(index));
      } else {
        dispatch(decrementUpScore(index));
      }
    } else if (voteType === "down") {
      if (voteValue) {
        dispatch(decrementDownScore(index));
      } else {
        dispatch(incrementDownScore(index));
      }
    }

  };


  if (isPending) {
    return (
      <>
        <PostPending />
        <PostPending />
        <PostPending />
      </>
    )
  } else if (isRejected) {
    return <p>Rejected</p>;
  } else {
    return (
      <div className={styles.QuickSearchResultsContainer}>
        <h2>{selectedCategory.category}</h2>
        {
          HomePosts.map((post, index) => {
            return (
              <div className={styles.post} key={index}>
                <Post post={post} index={index} className={styles.post} handleVote={handleVote} />
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default HomePosts;