import React from "react";
<<<<<<< HEAD

const PostVisual = () => {
  return (
    <>
      
    </>
  )
=======
import styles from './PostVisual.module.css';

const PostVisual = ({postVisualData}) => {
  const {
    post_hint,
    media,
    preview,
  } = postVisualData;

  const imageSource = preview.images[0].source.url;

  if (post_hint === "image") {
    return (
      <div className={styles.PostVisualContainer}>
        <img src={imageSource} alt=""/>
      </div>
    )
  } else if (post_hint === "hosted:video") {
    return (
      <div className={styles.PostVisualContainer}>
        
      </div>
    )
  } else {
    return null;
  }
>>>>>>> fix-someting
};

export default PostVisual;