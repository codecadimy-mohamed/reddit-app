import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// reducers

export const getTopPosts = createAsyncThunk(
  'topPosts/getTopPosts',
  async (endPoint) => {
    try {
      const response = await fetch(`https://www.reddit.com${endPoint}`);

      if (response.ok) {
        const json = await response.json();
        return json;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const getComments = createAsyncThunk(
  'topPost/getComments',
  async (endPoint) => {
    try {
      const response = await fetch(`https://www.reddit.com/${endPoint}`);

      if (response.ok) {
        const json = await response.json();
        console.log('this is comment json');
        console.log(json);
        return json;
      }
    } catch (error) {
      console.log(error);
    }
  } 
);

const options = {
  name: "topPosts",
  initialState: {
    topPosts: [],
    topPostsPending: false,
    topPostsRejected: false,

    postsComments: [],
    postsCommentsPending: false,
    postsCommentsRejected: false,
  },
  reducers: {
    incrementUpScore: (state, action) => {
      const index = action.payload;
      state.topPosts[index].data.score++;
    },
    decrementUpScore: (state, action) => {
      const index = action.payload;
      state.topPosts[index].data.score--;
    },
    decrementDownScore: (state, action) => {
      const index = action.payload;
      state.topPosts[index].data.score--;
    },
    incrementDownScore: (state, action) => {
      const index = action.payload;
      state.topPosts[index].data.score++;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(getTopPosts.pending, (state) => {
        state.topPostsPending = true;
        state.topPostsRejected = false;
      })
      .addCase(getTopPosts.fulfilled, (state, action) => {
        state.topPostsPending = false;
        state.topPostsRejected = false;

        const topPostsResults = action.payload.data.children;
        state.topPosts = topPostsResults;
      })
      .addCase(getTopPosts.rejected, (state) => {
        state.topPostsPending = false;
        state.topPostsRejected = true;
      })
      // getComments
      .addCase(getComments.pending, (state) => {
        state.postsCommentsPending = true;
        state.postsCommentsRejected = false;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.postsCommentsPending = false;
        state.postsCommentsRejected = false;

        const comments = action.payload[1].data.children;
        console.log('this comments');
        console.log(comments);
        state.postsComments = comments;      
      })
      .addCase(getComments.rejected, (state) => {
        state.postsCommentsPending = false;
        state.postsCommentsRejected = true;
      })
  }
};

const topPostsSlice = createSlice(options);

// selectors
export const selectTopPosts = state => state.topPosts.topPosts;
export const selectTopPostsPending = state => state.topPosts.topPostsPending;
export const selectTopPostsRejected = state => state.topPosts.topPostsRejected;

export const selectPostsComments = state => state.topPosts.postsComments;
export const selectPostsCommentsPending = state => state.topPosts.postsCommentsPending;
export const selectPostsCommentsRejected = state => state.topPosts.postsCommentsRejected;
  
// actions
export const { incrementUpScore, decrementUpScore, incrementDownScore, decrementDownScore } = topPostsSlice.actions;

// reducer
export default topPostsSlice.reducer;