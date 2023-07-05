import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../Components/Post/Post";
import styles from './TopPosts.module.css';
import { getTopPosts, selectTopPosts, selectTopPostsPending, selectTopPostsRejected } from "./topPostsSlice";

function TopPosts({ }) {
  const dispatch = useDispatch();

  const topPosts = useSelector(selectTopPosts);
  const isPending = useSelector(selectTopPostsPending);
  const isRejected = useSelector(selectTopPostsRejected);

  useEffect(() => {
    dispatch(getTopPosts());
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
          topPosts.map((post, index) => {
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

export default TopPosts;