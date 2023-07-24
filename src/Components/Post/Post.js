import React, { useState } from "react";

import styles from "./Post.module.css";
import PostHeader from "./PostHeader/PostHeader";
import PostVisual from "./PostVisual/PostVisual";
import PostTitle from "./PostTitle/PostTitle";
import PostBottom from "./PostBottom/PostBottom";

const Post = ({
  post,
  index,
  handleVote,
  handleCommentClick,
  postsComments,
  postsCommentsPending,
  postsCommentsRejected
}) => {

  // for PostBottom
  const [voteUp, setVoteUp] = useState(false);
  const [voteDown, setVoteDown] = useState(false);

  const { data } = post;

  // PostHeader
  const postHeaderData = {
    subreddit_name_prefixed: data.subreddit_name_prefixed,
    created_utc: data.created_utc,
    all_awardings: data.all_awardings,
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

  const handleCommentClickOnPostBottom = () => {
    const subreddit = data.subreddit_name_prefixed;
    const postId = data.id;

    handleCommentClick(subreddit, postId);
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
      <PostHeader
        profileName={data.subreddit_name_prefixed}
        created={data.created_utc}
        awardings={data.all_awardings}
      />
      <PostVisual postVisualData={postVisualData} />
      <PostTitle postTitleData={postTitleData} />
      <PostBottom
        postBottomData={postBottomData}
        handleVoteType={handleVoteType}
        handleCommentClickOnPostBottom={handleCommentClickOnPostBottom}
        postsComments={postsComments}
        postsCommentsPending={postsCommentsPending}
        postsCommentsRejected={postsCommentsRejected}
      />
    </div>
  );
};

export default Post;
