import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingPosts, selectTrendingPosts, trendingPostsPending, trendingPostsRejected, } from "../../features/searchPage/searchPageSlice";
import Post from "../Post/Post";
import styles from './QuickSearchResults.module.css';

function QuickSearchResults({ }) {
  const dispatch = useDispatch();

  const trendingPosts = useSelector(selectTrendingPosts);
  const isPending = useSelector(trendingPostsPending);
  const isRejected = useSelector(trendingPostsRejected);

  useEffect(() => {
    dispatch(getTrendingPosts());
  }, []);

  if (isPending) {
    return (
      <p>Pedning</p>
    )
  };

  if (isRejected) {
    return <p>Rejected</p>
  };

  return (
    <div className={styles.QuickSearchResultsContainer}>
        <h2>Popular posts</h2>
        {
          trendingPosts.map((post, index) => {
            return (
                <div className={styles.post}>
                  <Post post={post} index={index} className={styles.post}/>
                </div>
            )
          })
        }
    </div>
  )
};

export default QuickSearchResults;