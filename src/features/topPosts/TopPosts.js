import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../Components/Post/Post";
import styles from './TopPosts.module.css';
import { getTopPosts, selectTopPosts, selectTopPostsPending, selectTopPostsRejected, incrementUpScore, decrementUpScore, incrementDownScore, decrementDownScore } from "./topPostsSlice";
import PostPending from "../../Components/PostPending/PostPending";
import { selectSelectedSubreddit } from "../searchInput/searchInputSlice";

function TopPosts() {
  const dispatch = useDispatch();

  const topPosts = useSelector(selectTopPosts);
  const isPending = useSelector(selectTopPostsPending);
  const isRejected = useSelector(selectTopPostsRejected);

  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  useEffect(() => {
    // Dispatch getTopPosts initially
    const endPoint = `/${selectedSubreddit.data.display_name_prefixed}/.json`;
    dispatch(getTopPosts(endPoint));
  }, [dispatch, selectedSubreddit]);

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
      <div className={styles.QuickSearchResultsContainer}>
        <h2>{selectedSubreddit.data.display_name_prefixed} posts</h2>
        <PostPending />
        <PostPending />
        <PostPending />
      </div>
    )
  } else if (isRejected) {
    return <p>Rejected</p>;
  } else {
    return (
      <div className={styles.QuickSearchResultsContainer}>
        <h2>{selectedSubreddit.data.display_name_prefixed} posts</h2>
        {
          topPosts.map((post, index) => {
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
export default TopPosts;