import { configureStore } from "@reduxjs/toolkit";
import searchBarSliceReducer from "../features/searchBar/searchBarSlice";

// create and export the Store
export default configureStore({
  reducer: {
    searchTerm: searchBarSliceReducer, 
  },
});