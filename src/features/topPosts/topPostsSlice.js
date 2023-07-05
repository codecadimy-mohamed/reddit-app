import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const options = {
  name: "topPosts",
  initialState: {
    topPosts: [],
    topPostsPending: false,
    topPostsRejected: false,

    newScores: [],
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
    // newScore
    changeScore: (state, action) => {
      const {score, index} = action.payload;
      state.topPosts[index].data.score = score;
    }
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
      // this for getNewScore.
      .addCase(getNewScore.pending, (state) => {
        state.newScoresPending = true;
        state.newScoresRejected = false;
        console.log('newScore pending');
      })
      .addCase(getNewScore.fulfilled, (state, action) => {
        state.newScoresPending = false;
        state.newScoresRejected = false;
        console.log('newScore fulfilled');

        state.newScores = action.payload;
      })
      .addCase(getNewScore.rejected, (state) => {
        state.newScoresPending = false;
        state.newScoresRejected = true;
        console.log('newScore rejected');
      })
  }
};

const topPostsSlice = createSlice(options);

// reducers

export const getTopPosts = createAsyncThunk(
  'topPosts/getTopPosts',
  async () => {
    try {
      const response = await fetch(`https://www.reddit.com/r/business/.json`);

      if (response.ok) {
        const json = await response.json();
        return json;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const getNewScore = createAsyncThunk(
  'topPosts/getNewScore',
  async () => {
    try {
      const response = await fetch('https://www.reddit.com/r/business/.json');

      if (response.ok) {
        const json = await response.json();
        const newScores = json.data.children.map(element => element.data.score);
        return newScores;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

// selectors

  // topPosts
export const selectTopPosts = state => state.topPosts.topPosts;
export const selectTopPostsPending = state => state.topPosts.topPostsPending;
export const selectTopPostsRejected = state => state.topPosts.topPostsRejected;

  // newScores
export const selectNewScores = state => state.topPosts.newScores;

// exports
export const { incrementUpScore, decrementUpScore, incrementDownScore, decrementDownScore, changeScore } = topPostsSlice.actions;
export default topPostsSlice.reducer;