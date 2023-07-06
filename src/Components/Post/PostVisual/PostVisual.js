import React from "react";
import styles from "./PostVisual.module.css";

const PostVisual = ({ postVisualData }) => {
  const { post_hint, media, preview, url } = postVisualData;

  if (post_hint === "image") {
    const imageSource = preview.images[0].source.url;
    const imageHeight = preview.images[0].source.height;
    
    return (
      <div className={styles.PostVisualContainer}>
        <img src={url} alt="" />
      </div>
    );
  } else if (post_hint === "hosted:video") {
    const { fallback_url, width, height, hls_url } = media.reddit_video;

    return (
      <div className={styles.PostVisualContainer}>
        <video controls>
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
