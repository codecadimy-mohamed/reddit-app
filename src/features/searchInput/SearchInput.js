import React, { useEffect } from "react";
import styles from './SearchInput.module.css';
import { addSearchTerm, deleteSearchTerm, getSubredditsQuickResults, selectSearchTerm, selectSubreddits, selectSubredditsPending, selectSubredditsRejected } from './searchInputSlice';
import { useDispatch, useSelector } from "react-redux";
import Backward from "../../Components/Arrows/Backward/Backward";
import Subreddits from "../../Components/subreddits/Subreddits";
import { useSearchParams } from "react-router-dom";

const SearchInput = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const subreddits = useSelector(selectSubreddits)
  const subredditsPending = useSelector(selectSubredditsPending)
  const subredditsRejected = useSelector(selectSubredditsRejected)
  const dispatch = useDispatch();

   const [searchParams, setSearchParams] = useSearchParams();
   const q = searchParams.get('q');

   useEffect(() => {
    dispatch(getSubredditsQuickResults(q));
   }, [q]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchParams({q: value});
  };
  const handleDeleteClick = () => {
    dispatch(deleteSearchTerm());
  };

  return (
    <div className={styles.SearchInputContainer}>
      <div className={styles.backward}>
        <Backward />
      </div>
      <form>
        <div className={styles.searchInput}>
          <input
            type="text"
            name="searchTerm"
            value={q}
            onChange={handleInputChange}
            placeholder="Search Reddit"
          />
          {searchTerm && (
            <div className={styles.deleteSymbole} onClick={handleDeleteClick}>
            </div>
          )}

        </div>
      </form>
      <div className={styles.searchResults} >
        {q &&
          <Subreddits
            subreddits={subreddits}
            subredditsPending={subredditsPending}
            subredditsRejected={subredditsRejected}
          />
        }
      </div>
    </div>
  )
};

export default SearchInput;