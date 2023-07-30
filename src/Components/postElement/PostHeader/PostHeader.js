import React from "react";

import styles from './PostHeader.module.css';


export const creationTime = (created) => {
  const createdUtcTimestamp = created * 1000; // Convert to milliseconds

  const currentTime = Date.now();
  const elapsedTime = currentTime - createdUtcTimestamp;

  const seconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years}y`;
  } else if (months > 0) {
    return `${months}mo`;
  } else if (weeks > 0) {
    return `${weeks}w`;
  } else if (days > 0) {
    return `${days}d`;
  } else if (hours > 0) {
    return `${hours}h`;
  } else if (minutes > 0) {
    return `${minutes}m`;
  } else {
    return `${seconds}s`;
  }
};

const PostHeader = ({ profileName, created, awardings }) => {

  return (
    <div className={styles.PostHeaderContainer}>
      <div className={styles.profileImage}></div>
      <p className={styles.profileName}>
        <a href={`https://www.reddit.com/${profileName}`}>{profileName}</a>
      </p>
      <span className={styles.creationTime}>{creationTime(created)}</span>
      <div className={styles.dotsIconContainer}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  )
};

export default PostHeader;