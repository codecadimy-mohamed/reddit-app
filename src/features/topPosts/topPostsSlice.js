import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const options = {
  name: "topPosts",
  initialState: {
    topPosts: [],
    topPostsPending: false,
    topPostsRejected: false,

    newScores: [],
    newNumComments: [],
    newScoresPending: false,
    newScoresRejected: false,
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
        console.log('this the action');
        console.log(action);

        const topPostsResults = action.payload.data.children;
        state.topPosts = topPostsResults;
        console.log(`This is topPosts`)
        console.log(topPostsResults);
        console.log('top post fulfilled 2');
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
      const response = await fetch(`https://www.reddit.com/r/popular/top/.json`);

      if (response.ok) {
        const json = await response.json();
        console.log('topPosts fetched');
        return json;
      }
      console.log('top Post not fetched');
    } catch (error) {
      console.log('the fetch data failed');
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