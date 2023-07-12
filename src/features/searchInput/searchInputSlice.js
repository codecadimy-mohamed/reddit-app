import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const options = {
  name: "searchInput",
  initialState: {
    subredditsQuickResults: [],
    subredditsQuickResultsPending: false,
    subredditsQuickResultsRejected: false,

    selectedSubreddit: {
      data: {
        display_name_prefixed: 'r/popular/top'
      },
      kind: 't4',
    },
  },
  reducers: {
    addSelectedSubreddit: (state, action) => {
      state.selectedSubreddit = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSubredditsQuickResults.pending, (state) => {
        state.subredditsQuickResultsPending = true;
        state.subredditsQuickResultsRejected = false;
      })
      .addCase(getSubredditsQuickResults.fulfilled, (state, action) => {
        state.subredditsQuickResultsPending = false;
        state.subredditsQuickResultsRejected = false;
        const result = action.payload.data?.children || [];
        state.subredditsQuickResults = result;
      })
      .addCase(getSubredditsQuickResults.rejected, (state) => {
        state.subredditsQuickResultsPending = false;
        state.subredditsQuickResultsRejected = true;
      });
  },
};

const searchInputSlice = createSlice(options);

export const getSubredditsQuickResults = createAsyncThunk(
  "searchInput/getSubredditsQuickResults",
  async (q) => {
    try {
      const response = await fetch(
        `https://www.reddit.com/search/.json?q=${q}&type=sr`
      );

      if (response.ok) {
        const json = await response.json();
        console.log(json);
        return json;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

// selectors
export const selectSubreddits = (state) => state.searchInput.subredditsQuickResults;
export const selectSubredditsPending = (state) => state.searchInput.subredditsQuickResultsPending;
export const selectSubredditsRejected = (state) => state.searchInput.subredditsQuickResultsRejected;
export const selectSelectedSubreddit = (state) => state.searchInput.selectedSubreddit;

// actions
export const { addSelectedSubreddit } = searchInputSlice.actions;

// reducer
export default searchInputSlice.reducer;
