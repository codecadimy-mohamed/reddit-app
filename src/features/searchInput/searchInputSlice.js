import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "searchInput",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    addSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    deleteSearchTerm: (state) => {
      state.searchTerm = "";
    },
  },
};
const searchInputSlice = createSlice(options);

// selectors
export const selectSearchTerm = state => state.searchInput.searchTerm;


// exports 
export const { addSearchTerm, deleteSearchTerm } = searchInputSlice.actions;
export default searchInputSlice.reducer;