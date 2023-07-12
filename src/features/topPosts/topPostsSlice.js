import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const options = {
  name: "topPosts",
  initialState: {
    topPosts: [],
    topPostsPending: false,
    topPostsRejected: false,
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
  }
};

const topPostsSlice = createSlice(options);

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

// selectors

  // topPosts
export const selectTopPosts = state => state.topPosts.topPosts;
export const selectTopPostsPending = state => state.topPosts.topPostsPending;
export const selectTopPostsRejected = state => state.topPosts.topPostsRejected;
  
// exports
export const { incrementUpScore, decrementUpScore, incrementDownScore, decrementDownScore } = topPostsSlice.actions;
export default topPostsSlice.reducer;