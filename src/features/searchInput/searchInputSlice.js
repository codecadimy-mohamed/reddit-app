import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const options = {
  name: "searchInput",
  initialState: {
    searchTerm: "",
    subredditsQuickResults: [],
    subredditsQuickResultsPending: false,
    subredditsQuickResultsRejected: false,
  },
  reducers: {
    addSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    deleteSearchTerm: (state) => {
      state.searchTerm = "";
    },
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
        console.log(result);
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
        return json;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

// selectors
export const selectSearchTerm = (state) => state.searchInput.searchTerm;
export const selectSubreddits = (state) => state.searchInput.subredditsQuickResults;
export const selectSubredditsPending = (state) => state.searchInput.subredditsQuickResultsPending;
export const selectSubredditsRejected = (state) => state.searchInput.subredditsQuickResultsRejected;

// exports
export const { addSearchTerm, deleteSearchTerm } = searchInputSlice.actions;
export default searchInputSlice.reducer;
