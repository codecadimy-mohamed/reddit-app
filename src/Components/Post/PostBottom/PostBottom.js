import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';

import styles from "./PostBottom.module.css";
import Votes from "./votes/Votes";
import CommentsContainer from "./commentsContainer/CommentsContainer";

export const formatAnyNumber = (number) => {
  const numberString = number.toString();
  if (number < 1000) {
    return `${number}`;
  } else if (number < 100000) {
    const handrads = numberString.slice(-3, -2);
    const thousands = Math.floor(number / 1000);
    if (handrads !== '0') {
      return `${thousands}.${handrads}K`;
    } else {
      return `${thousands}K`;
    }
  } else if (number < 100000000) {
    const thousands = numberString.slice(-6, -5);
    const millions = Math.floor(number / 1000000);
    if (thousands !== '0') {
      return `${millions}.${thousands}M`
    } else {
      return `${millions}M`
    }
  }
}

const PostBottom = ({
  postBottomData,
  handleVoteType,
  handleCommentClickOnPostBottom,
  postsComments,
  postsCommentsPending,
  postsCommentsRejected
}) => {
  const [showComments, setShowComments] = useState(false);

  const {
    score,
    num_comments,
    // this outside the fetched data.
    voteUp,
    voteDown,
  } = postBottomData;

  const votesData = {
    score: score,
    voteUp: voteUp,
    voteDown: voteDown,
  }

  const handleCommentClick = () => {
    setShowComments(true);
    handleCommentClickOnPostBottom();
  }

  return (
    <div className={styles.PostBottomContainer}>
      <Votes votesData={votesData} handleVoteType={handleVoteType} />
      <div
        className={styles.comments}
        onClick={() => handleCommentClick()}
      >
        <FontAwesomeIcon icon={faComment} style={{ height: 25 }} />
        <span>{formatAnyNumber(num_comments)}</span>

      </div>
      {
        showComments && (
          <div className={styles.commentsContainer} onClick={() => setShowComments(false)}>
            <CommentsContainer
              postsComments={postsComments}
              postsCommentsPending={postsCommentsPending}
              postsCommentsRejected={postsCommentsRejected}
            />
          </div>
        )
      }
    </div>
  )
}

export default PostBottom;