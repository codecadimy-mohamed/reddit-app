import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const options = {
  name: "searchPage",
  initialState: {
    searchTerm: "",

    quickSearchResults: [],
    quickSearchResultsPending: false,
    quickSearchResultsRejected: false,

    trendingPosts: [],
    trendingPostspending: false,
    trendingPostsRejected: false,
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
    .addCase(setSearchTermAndfetchData.pending, (state) => {
      state.quickSearchResultsPending = true;
      state.quickSearchResultsRejected = false;
      console.log('pending');
    })
    .addCase(setSearchTermAndfetchData.fulfilled, (state, action) => {
      state.quickSearchResultsPending = false;
      state.quickSearchResultsRejected = false;
      console.log('fulfilled');

      const searchResults = action.payload.data.children;
      state.quickSearchResults = searchResults;
      console.log(searchResults);
    })
    .addCase(setSearchTermAndfetchData.rejected, (state) => {
      state.quickSearchResultsPending = false;
      state.quickSearchResultsRejected = true;
      console.log('rejected');
    })
    .addCase(getTrendingPosts.pending, (state) => {
      state.trendingPostspending = true;
      state.trendingPostsRejected = false;
      console.log('trendingPosts pending');
    })
    .addCase(getTrendingPosts.fulfilled, (state, action) => {
      state.trendingPostspending = false;
      state.trendingPostsRejected = false;
      console.log('trendingPosts fulfilled');

      const trendingResults = action.payload.data.children;
      state.trendingPosts = trendingResults;
      console.log(`This is trendingPosts`)
      console.log(trendingResults);
    })
    .addCase(getTrendingPosts.rejected, (state) => {
      state.trendingPostspending = false;
      state.trendingPostsRejected = true;
      console.log('trendingPosts rejected');
    })
  }
};
const searchSlice = createSlice(options);

export const setSearchTermAndfetchData = createAsyncThunk(
  'searchPage/quickSearchResults',
  async (searchTerm, {dispatch, getState}) => {
    dispatch(searchSlice.actions.addSearchTerm(searchTerm));
    const currentSearchTerm = getState().searchPage.searchTerm;
    try {
      const response = await fetch(`https://www.reddit.com/search.json?q=${currentSearchTerm}`);
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

export const getTrendingPosts = createAsyncThunk(
  'searchPage/trendingPosts',
  async (_, { dispatch, getState }) => {
    try {
      const response = await fetch(`https://www.reddit.com/r/popular/top.json?t=day`);

      if (response.ok) {
        const json = await response.json();
        return json;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

// selectors
export const selectSearchTerm = state => state.searchPage.searchTerm;

export const selectSearchResults = state => state.searchPage.quickSearchResults;
export const SearchResultsPending = state => state.searchPage.quickSearchResultsPending;
export const SearchResultsRejected = state => state.searchPage.quickSearchResultsRejected;

export const selectTrendingPosts = state => state.searchPage.trendingPosts;
export const trendingPostsPending = state => state.searchPage.trendingPostspending;
export const trendingPostsRejected = state => state.searchPage.trendingPostsRejected;

// exports 
export const { addSearchTerm, deleteSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;