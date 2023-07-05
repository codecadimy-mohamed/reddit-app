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
    // newScore
    changeScore: (state, action) => {
      const {score, index} = action.payload;
      state.topPosts[index].data.score = score;
    },
    changeComments: (state, action) => {
      const {num_comments, index} = action.payload;
      state.topPosts[index].data.num_comments = num_comments;
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
      // this for getNewScoreAndNumComments.
      .addCase(getNewScoreAndNumComments.pending, (state) => {
        state.newScoresPending = true;
        state.newScoresRejected = false;
      })
      .addCase(getNewScoreAndNumComments.fulfilled, (state, action) => {
        state.newScoresPending = false;
        state.newScoresRejected = false;

        const {score, num_comments} = action.payload;
        console.log(num_comments);
        console.log(score);
        state.newScores = score;
        state.newNumComments = num_comments;
      })
      .addCase(getNewScoreAndNumComments.rejected, (state) => {
        state.newScoresPending = false;
        state.newScoresRejected = true;
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

export const getNewScoreAndNumComments = createAsyncThunk(
  'topPosts/getNewScoreAndNumComments',
  async () => {
    try {
      const response = await fetch('https://www.reddit.com/r/popular/top/.json?t=day');

      if (response.ok) {
        const json = await response.json();
        const newScore = json.data.children.map(element => element.data.score);
        const newNumComments = json.data.children.map(element => element.data.num_comments);
        return {score: newScore, num_comments: newNumComments};
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

  // newScores
export const selectNewScores = state => state.topPosts.newScores;
export const selectNewNumComments = state => state.topPosts.newNumComments;
  
// exports
export const { incrementUpScore, decrementUpScore, incrementDownScore, decrementDownScore, changeScore, changeComments } = topPostsSlice.actions;
export default topPostsSlice.reducer;