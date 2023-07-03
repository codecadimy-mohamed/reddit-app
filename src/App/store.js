import { configureStore } from "@reduxjs/toolkit";
import searchPageSliceReducer from "../features/searchPage/searchPageSlice";

// create and export the Store
export default configureStore({
  reducer: {
    searchPage: searchPageSliceReducer, 
  },
});