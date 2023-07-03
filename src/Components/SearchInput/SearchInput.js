import React from "react";
import styles from './SearchInput.module.css';

const SearchInput = ({
  searchTerm,
  handleInputChange,
  handleDeleteClick,
}) => {

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