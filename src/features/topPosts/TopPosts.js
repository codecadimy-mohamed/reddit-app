import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../Components/Post/Post";
import styles from './TopPosts.module.css';
import { getTopPosts, selectTopPosts, selectTopPostsPending, selectTopPostsRejected, incrementUpScore, decrementUpScore, incrementDownScore, decrementDownScore, getNewScoreAndNumComments, selectNewScores, changeScore, selectNewNumComments, changeComments} from "./topPostsSlice";

function TopPosts() {
  const dispatch = useDispatch();

  const topPosts = useSelector(selectTopPosts);
  const isPending = useSelector(selectTopPostsPending);
  const isRejected = useSelector(selectTopPostsRejected);

  const newScores = useSelector(selectNewScores);
  const newNumComments = useSelector(selectNewNumComments);

  useEffect(() => {
    // Dispatch getTopPosts initially
    dispatch(getTopPosts());
  }, []);

  useEffect(() => {
    // Dispatch getNewScoreAndNumComments to update values
    const intervale = setInterval(() => {
      dispatch(getNewScoreAndNumComments());

    }, 3000);

    return () => clearInterval(intervale);
  }, []);

  useEffect(() => {
    // dispatchs when one of the Values updated 
    if (topPosts.length === newScores.length && topPosts.length === newNumComments.length) {
      topPosts.forEach((element, index) => {

        const outdatedScore = element.data.score;
        const updatedScore = newScores[index];
        const outdatedNumComments = element.data.num_comments;
        const updatedNumComments = newNumComments[index];

        if (outdatedScore !== updatedScore && updatedScore) {
          dispatch(changeScore({score: updatedScore, index: index}));
        }
        if (outdatedNumComments !== updatedNumComments && updatedNumComments) {
          dispatch(changeComments({num_comments: updatedNumComments, index: index}));
        }

      });
    };
  }, [newScores, newNumComments]);

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