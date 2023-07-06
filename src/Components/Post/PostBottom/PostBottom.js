import React from "react";
import styles from "./PostBottom.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretUp, faComment } from '@fortawesome/free-regular-svg-icons';

const PostBottom = ({ postBottomData, handleVoteType }) => {
  const {
    score,
    num_comments,
    // this outside the fetched data.
    voteUp,
    voteDown,
  } = postBottomData;


  const scoreNumber = (score) => {
    const scoreString = score.toString();
    if (score < 1000) {

      return `${score}`;

    } else if (score < 100000) {

      const handrads = scoreString.slice(-3, -2);
      const thousands = Math.floor(score / 1000);

      if (handrads !== '0') {
        return `${thousands}.${handrads}k`;
      } else {
        return `${thousands}k`;
      }

    } else if (score < 100000000) {

      const thousands = scoreString.slice(-6, -5);
      const millions = Math.floor(score / 1000000);

      if (thousands !== '0') {
        return `${millions}.${thousands}M`
      } else {
        return `${millions}M`
      }

    }
  }

  const commentsNumber = (comments) => {
    const commentsString = comments.toString();

    if (comments < 1000) {

      return `${comments}`;

    } else if (comments < 100000) {

      const handrads = commentsString.slice(-3, -2);
      const thousands = Math.floor(comments / 1000);

      if (handrads !== '0') {
        return `${thousands}.${handrads}K`;
      } else {
        return `${thousands}K`;
      }

    } else if (comments < 100000000) {

      const thousands = commentsString.slice(-6, -5);
      const millions = Math.floor(comments / 1000000);

      if (thousands !== '0') {
        return `${millions}.${thousands}M`
      } else {
        return `${millions}M`
      }

    }
  }

  const inlineStyles = {
    up: {
      true: "orange",
      false: "black",
    },
    down: {
      true: "blue",
      false: "black",
    },
  }

  return (
    <div className={styles.PostBottomContainer}>
      <div className={styles.votes}>

        <div className={styles.upArrow} onClick={() => handleVoteType("up")} >
          <FontAwesomeIcon
            icon={faSquareCaretUp}
            style={{
              color: inlineStyles.up[voteUp],
              height: 25,
            }}
          />
        </div>

        <span className={styles.score} >{scoreNumber(score)}</span>

        <div className={styles.downArrow} onClick={() => handleVoteType("down")}>
          <FontAwesomeIcon
            icon={faSquareCaretUp} rotation={180}
            style={{
              color: inlineStyles.down[voteDown],
              height: 25,
            }}
          />
        </div>
      </div>

      <div className={styles.comments}>
        <FontAwesomeIcon icon={faComment} style={{height: 25,}}/>
        <span>{commentsNumber(num_comments)}</span>
      </div>

    </div>
  )
}

export default PostBottom;