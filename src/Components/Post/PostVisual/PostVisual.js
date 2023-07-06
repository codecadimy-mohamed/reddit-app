import React from "react";
import styles from "./PostVisual.module.css";

const PostVisual = ({ postVisualData }) => {
  const { post_hint, media, url } = postVisualData;

  if (post_hint === "image") {
    
    return (
      <div className={styles.PostVisualContainer}>
        <img src={url} alt="" />
      </div>
    );
  } else if (post_hint === "hosted:video") {
    const { fallback_url, hls_url } = media.reddit_video;

    return (
      <div className={styles.PostVisualContainer}>
        <video controls preload="metadata">
          <source src={fallback_url} type="video/mp4" />
          {/* Use the HLS URL if available */}
          {hls_url && <source src={hls_url} type="application/x-mpegURL" />}
        </video>
      </div>
    );
  } else {
    return null;
  }
};

export default PostVisual;
