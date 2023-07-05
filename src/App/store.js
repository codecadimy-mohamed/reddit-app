import { configureStore } from "@reduxjs/toolkit";
import searchInputSliceReducer from "../features/searchInput/searchInputSlice";
import topPostsSliceReducer from "../features/topPosts/topPostsSlice";

// create and export the Store
export default configureStore({
  reducer: {
    searchInput: searchInputSliceReducer,
    topPosts: topPostsSliceReducer,
  },
});