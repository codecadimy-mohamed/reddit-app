import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from './TopPosts.module.css';
import {
  getTopPosts,
  selectTopPosts,
  selectTopPostsPending,
  selectTopPostsRejected,
  incrementUpScore,
  decrementUpScore,
  incrementDownScore,
  decrementDownScore,
  getComments,
  selectPostsComments,
  selectPostsCommentsPending,
  selectPostsCommentsRejected,
} from "./topPostsSlice";
import { selectSelectedSubreddit } from "../searchInput/searchInputSlice";
import PostPending from "../../Components/PostPending/PostPending";
import Post from "../../Components/post/Post";

function TopPosts() {
  const dispatch = useDispatch();

  const topPosts = useSelector(selectTopPosts);
  const isPending = useSelector(selectTopPostsPending);
  const isRejected = useSelector(selectTopPostsRejected);

  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  const postsComments = useSelector(selectPostsComments);
  const postsCommentsPending = useSelector(selectPostsCommentsPending);
  const postsCommentsRejected = useSelector(selectPostsCommentsRejected);

  useEffect(() => {
    // Dispatch getTopPosts initially
    const endPoint = `/${selectedSubreddit.data.display_name_prefixed}/.json`;
    dispatch(getTopPosts(endPoint));
  }, [dispatch, selectedSubreddit]);

  // Post business
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

  const handleCommentClick = (subreddit, postId) => {
    const endPoint = `/${subreddit}/comments/${postId}/.json`;
    dispatch(getComments(endPoint));
  }


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
                <Post
                  className={styles.post}
                  post={post}
                  index={index}
                  // Post Bottom
                  handleVote={handleVote}
                  handleCommentClick={handleCommentClick}
                  postsComments={postsComments}
                  postsCommentsPending={postsCommentsPending}
                  postsCommentsRejected={postsCommentsRejected}
                />
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default TopPosts;