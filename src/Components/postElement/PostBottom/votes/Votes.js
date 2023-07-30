import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretUp } from '@fortawesome/free-regular-svg-icons';
import styles from "../PostBottom.module.css";

const Votes = ({ votesData, handleVoteType }) => {
  const {
    score,
    voteUp,
    voteDown,
  } = votesData;

  const formatAnyNumber = (number) => {
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

  const getScoreColor = () => {
    if (voteUp) {
      return 'orange';
    } else if (voteDown) {
      return 'blue';
    } else {
      return 'black';
    }
  }
  return (
    <>
      <div className={styles.votes}>
        <div className={styles.upArrow} onClick={() => handleVoteType("up")}>
          <FontAwesomeIcon
            icon={faSquareCaretUp}
            style={{
              color: voteUp ? 'orange' : 'black',
              height: 25,
            }}
          />
        </div>
        <span className={styles.score} style={{ color: getScoreColor() }}>
          {formatAnyNumber(score)}
        </span>
        <div className={styles.downArrow} onClick={() => handleVoteType("down")}>
          <FontAwesomeIcon
            icon={faSquareCaretUp} rotation={180}
            style={{
              color: voteDown ? 'blue' : 'black',
              height: 25,
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Votes;