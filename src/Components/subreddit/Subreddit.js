import React from "react";
import styles from "./Subreddit.module.css";

const Subreddit = ({ subreddit, index }) => {
  const {
    display_name_prefixed,
    subscribers,
    icon_img,
  } = subreddit.data;

  const formatSubscribers = (subscribers) => {
    if (subscribers) {
      const subscribersString = subscribers.toString();

      if (subscribers < 1000) {
        return subscribers.toString();
      } else if (subscribers < 1000000) {
        const hundreds = subscribersString.slice(-3, -2);
        const thousands = Math.floor(subscribers / 1000);

        if (hundreds !== '0') {
          return `${thousands}.${hundreds}K`;
        } else {
          return `${thousands}K`;
        }
      } else if (subscribers < 1000000000) {
        const thousands = subscribersString.slice(-6, -5);
        const millions = Math.floor(subscribers / 1000000);

        if (thousands !== '0') {
          return `${millions}.${thousands}M`;
        } else {
          return `${millions}M`;
        }
      }

      return subscribers.toString(); // Default case
    } else {
      return 'xxxx';
    }
  };

  return (
    <div className={styles.subredditContainer} key={index}>
      <div
        className={styles.subredditProfile}
        style={{ backgroundImage: `url(${icon_img})` }}
      >
      </div>
      <h3 className={styles.subredditName}>{display_name_prefixed}</h3>
      <h4 className={styles.subredditMembers}>{formatSubscribers(subscribers)}</h4>
    </div>
  )
}

export default Subreddit;