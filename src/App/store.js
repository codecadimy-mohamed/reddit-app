import { configureStore } from "@reduxjs/toolkit";
import searchInputSliceReducer from "../features/searchInput/searchInputSlice";
import topPostsSliceReducer from "../features/topPosts/topPostsSlice";
import HomePostsSliceReducer from "../features/homePosts/homePostsSlice";
import categoriesSliceReducer from "../features/categories/categoriesSlice";

// create and export the Store
export default configureStore({
  reducer: {
    searchInput: searchInputSliceReducer,
    topPosts: topPostsSliceReducer,
    homePosts: HomePostsSliceReducer,
    categories: categoriesSliceReducer,
  },
});