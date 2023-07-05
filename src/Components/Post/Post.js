import React, { useState } from "react";
import PostHeader from "./PostHeader/PostHeader";
import PostTitle from "./PostTitle/PostTitle";
import styles from "./Post.module.css";
import PostBottom from "./PostBottom/PostBottom";

const Post = ({ post, index, handleVote }) => {
  const [voteUp, setVoteUp] = useState(false);
  const [voteDown, setVoteDown] = useState(false);

  const { data } = post;

  const postHeaderData = {
    subreddit_name_prefixed: data.subreddit_name_prefixed,
    created_utc: data.created_utc,
    all_awardings :data.all_awardings,
  };

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

  const postBottomData = {
    score: data.score,
    num_comments: data.num_comments,
  }
  const handleVoteType = (voteType) => {
    if (voteType === 'up') {
      handleVote(index, voteType, !voteUp);
      setVoteUp(!voteUp);
    } else if (voteType === 'down') {
      handleVote(index, voteType, !voteDown);
      setVoteDown(!voteDown);
    }
  } 

  return (
    <div className={styles.PostContainer} key={index}>
      <PostHeader postHeaderData={postHeaderData} />
      <PostTitle postTitleData={postTitleData} />
      <PostBottom postBottomData={postBottomData} handleVoteType={handleVoteType} />
    </div>
  );
};

export default Post;
