import React, { useState } from "react";
import PostHeader from "./PostHeader/PostHeader";
import PostTitle from "./PostTitle/PostTitle";
import styles from "./Post.module.css";
import PostBottom from "./PostBottom/PostBottom";
import PostVisual from "./PostVisual/PostVisual";

const Post = ({ post, index, handleVote }) => {

  // for PostBottom
  const [voteUp, setVoteUp] = useState(false);
  const [voteDown, setVoteDown] = useState(false);

  const { data } = post;

  // PostHeader
  const postHeaderData = {
    subreddit_name_prefixed: data.subreddit_name_prefixed,
    created_utc: data.created_utc,
    all_awardings :data.all_awardings,
  };

  // PostTitle
  const postTitleData = {
    title: data.title,
    link_flair_background_color: data.link_flair_background_color,
    link_flair_css_class: data.link_flair_css_class,
    link_flair_richtext: data.link_flair_richtext,
    link_flair_template_id: data.link_flair_template_id,
    link_flair_text: data.link_flair_text,
    link_flair_text_color: data.link_flair_text_color,
    link_flair_type: data.link_flair_type,
    author: data.author
  }

  // PostBottom
  const postBottomData = {
    score: data.score,
    num_comments: data.num_comments,
    // this outside the fetched data.
    voteUp: voteUp,
    voteDown: voteDown,
  }

  const handleVoteType = (voteType) => {
    if (voteType === 'up') {
      handleVote(index, voteType, !voteUp);
      setVoteUp(!voteUp);
      if (voteDown) {
        setVoteDown(!voteDown);
      }
    } else if (voteType === 'down') {
      handleVote(index, voteType, !voteDown);
      setVoteDown(!voteDown);
      if (voteUp) {
        setVoteUp(!voteUp);
      }
    }
  }
  
  // PostVisual
  const postVisualData = {
    post_hint: data.post_hint,
    media: data.media,
    preview: data.preview,
    url: data.url,
  }

  return (
    <div className={styles.PostContainer} key={index}>
      <PostHeader postHeaderData={postHeaderData} />
      <PostTitle postTitleData={postTitleData} />
      <PostVisual postVisualData={postVisualData} />
      <PostBottom postBottomData={postBottomData} handleVoteType={handleVoteType} />
    </div>
  );
};

export default Post;
