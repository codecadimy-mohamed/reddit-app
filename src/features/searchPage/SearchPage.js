import React from "react";
import { setSearchTermAndfetchData, deleteSearchTerm, selectSearchTerm } from './searchPageSlice';
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import styles from './SearchPage.module.css';
import SearchInput from "../../Components/SearchInput/SearchInput";

function SearchPage() {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const value = e.target.value;
    dispatch(setSearchTermAndfetchData(value));
  };
  const handleDeleteClick = () => {
    dispatch(deleteSearchTerm());
  };

  return (
    <div className={styles.SearchPageContainer}>
      <SearchInput
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
        handleDeleteClick={handleDeleteClick}
      />
      <Outlet />
    </div>
  )
};

export default SearchPage;