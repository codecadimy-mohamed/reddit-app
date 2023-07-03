import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const options = {
  name: "searchBar",
  initialState: {
    searchTerm: "",
    SearchResultCommunities: [],
    SearchResultCommunitiesPending: false,
    SearchResultCommunitiesRejected: false,
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
    .addCase(SearchResultCommunities.pending, (state) => {
      state.SearchResultCommunitiesPending = true;
      state.SearchResultCommunitiesRejected = false;
      console.log('pending');
    })
    .addCase(SearchResultCommunities.fulfilled, (state, action) => {
      state.SearchResultCommunitiesPending = false;
      state.SearchResultCommunitiesRejected = false;
      console.log('fulfilled');

      const communities = action.payload.data.children;
      state.SearchResultCommunities = communities;
      console.log(communities);
    })
    .addCase(SearchResultCommunities.rejected, (state) => {
      state.SearchResultCommunitiesPending = false;
      state.SearchResultCommunitiesRejected = true;
      console.log('rejected');
    })
  }
};
const searchTermSlice = createSlice(options);

export const SearchResultCommunities = createAsyncThunk(
  'searchTerm/SearchResultCommunities',
  async (searchTerm, {dispatch, getState}) => {
    dispatch(searchTermSlice.actions.addSearchTerm(searchTerm));
    const currentSearchTerm = getState().searchTerm.searchTerm;
    try {
      const response = await fetch(`https://www.reddit.com/search.json?q=${currentSearchTerm}`);
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
export const selectSearchTerm = state => state.searchTerm.searchTerm;

// exports 
export const { addSearchTerm, deleteSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;