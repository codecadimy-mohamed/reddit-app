import React from "react";
import { SearchResultCommunities, deleteSearchTerm, selectSearchTerm } from "./searchBarSlice";
import { useDispatch, useSelector } from "react-redux"
import styles from './SearchBar.module.css';

function SearchBar(props) {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const value = e.target.value;
    dispatch(SearchResultCommunities(value));
  };
  const handleDeleteClick = () => {
    dispatch(deleteSearchTerm());
  };

  return (
    <div className={styles.SearchBar}>
      <form>
        <div className={styles.searchInput}>
          <input
            type="text"
            name="searchTerm"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search Reddit"
          />
          <div className={styles.deleteSymbole} onClick={handleDeleteClick}>
          </div>
        </div>
      </form>
    </div>
  )
};

export default SearchBar;