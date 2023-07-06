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
        console.log('topPosts pending');
      })
      .addCase(getTopPosts.fulfilled, (state, action) => {
        state.topPostsPending = false;
        state.topPostsRejected = false;
        console.log('topPosts fulfilled');

        const topPostsResults = action.payload.data.children;
        state.topPosts = topPostsResults;
        console.log(`This is topPosts`)
        console.log(topPostsResults);
      })
      .addCase(getTopPosts.rejected, (state) => {
        state.topPostsPending = false;
        state.topPostsRejected = true;
        console.log('topPosts rejected');
      })
  }
};

const topPostsSlice = createSlice(options);

// reducers

export const getTopPosts = createAsyncThunk(
  'topPosts/getTopPosts',
  async () => {
    try {
      const response = await fetch(`https://www.reddit.com/r/popular/top/.json?t=day`);

      if (response.ok) {
        const json = await response.json();
        return json;
      }
    } catch (error) {
    }
  }
);


// selectors

  // topPosts
export const selectTopPosts = state => state.topPosts.topPosts;
export const selectTopPostsPending = state => state.topPosts.topPostsPending;
export const selectTopPostsRejected = state => state.topPosts.topPostsRejected;
  
// exports
export const { incrementUpScore, decrementUpScore, incrementDownScore, decrementDownScore, changeScore, changeComments } = topPostsSlice.actions;
export default topPostsSlice.reducer;