import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../Components/Post/Post";
import styles from './TopPosts.module.css';
import { getTopPosts, selectTopPosts, selectTopPostsPending, selectTopPostsRejected, incrementUpScore, decrementUpScore, incrementDownScore, decrementDownScore } from "./topPostsSlice";

function TopPosts() {
  const dispatch = useDispatch();

  const topPosts = useSelector(selectTopPosts);
  const isPending = useSelector(selectTopPostsPending);
  const isRejected = useSelector(selectTopPostsRejected);

  useEffect(() => {
    dispatch(getTopPosts());
  }, []);

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
    return <p>Pedning</p>;
  } else if (isRejected) {
    return <p>Rejected</p>;
  } else {
    return (
      <div className={styles.QuickSearchResultsContainer}>
        <h2>Popular posts</h2>
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