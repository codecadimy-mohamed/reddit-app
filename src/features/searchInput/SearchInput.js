import React from "react";
import styles from './SearchInput.module.css';
import { addSearchTerm, deleteSearchTerm, selectSearchTerm } from './searchInputSlice';
import { useDispatch, useSelector } from "react-redux";

const SearchInput = ({}) => {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const value = e.target.value;
    dispatch(addSearchTerm(value));
  };
  const handleDeleteClick = () => {
    dispatch(deleteSearchTerm());
  };

  return (
    <div className={styles.SearchInputContainer}>
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

export default SearchInput;