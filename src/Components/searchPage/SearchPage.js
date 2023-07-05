import React from "react";
import { Outlet } from "react-router";
import styles from './SearchPage.module.css';
import SearchInput from "../../features/searchInput/SearchInput";

function SearchPage() {
  return (
    <div className={styles.SearchPageContainer}>
      <SearchInput/>
      <Outlet />
    </div>
  )
};

export default SearchPage;