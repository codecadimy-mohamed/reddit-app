import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./SearchInput.module.css";
import Backward from "../../Components/Arrows/Backward/Backward";
import Subreddits from "../../Components/subreddits/Subreddits";
import {
  addSelectedSubreddit,
  getSubredditsQuickResults,
  selectSubreddits,
  selectSubredditsPending,
  selectSubredditsRejected,
} from "./searchInputSlice";

const SearchInput = () => {
  const subreddits = useSelector(selectSubreddits);
  const subredditsPending = useSelector(selectSubredditsPending);
  const subredditsRejected = useSelector(selectSubredditsRejected);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  const [showSubreddits, setShowSubreddits] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    dispatch(getSubredditsQuickResults(q));
  }, [q, dispatch]);

  useEffect(() => {
    const handleClickOUtside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSubreddits(false);
      }
    }

    document.addEventListener('click', handleClickOUtside);

    return () => document.removeEventListener('click', handleClickOUtside);
  });

  // check the subreddits is truty or not

  useEffect(() => {
    if (subreddits.length > 0) {
      setShowSubreddits(true);
    } else {
      setShowSubreddits(true);
    }
  }, [subreddits, dispatch])

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchParams({ q: value });
  };

  const handleDeleteClick = () => {
    setSearchParams({ q: "" });
    setShowSubreddits(false);
  };

  const handleSelectedSubreddit = (subreddit) => {
    dispatch(addSelectedSubreddit(subreddit));
    setShowSubreddits(false);
  };

  return (
    <div className={styles.SearchInputContainer}>
      <div className={styles.backward}>
        <Backward />
      </div>
      <form>
        <div className={styles.searchInput}>
          <input
          ref={inputRef}
            type="text"
            name="searchTerm"
            value={q}
            onChange={handleInputChange}
            placeholder="Search Reddit"
          />
          {q && (
            <div className={styles.deleteSymbol} onClick={handleDeleteClick}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>
          )}
        </div>
      </form>
      <div className={styles.searchResults}>
        {showSubreddits && (
          <Subreddits
            subreddits={subreddits}
            subredditsPending={subredditsPending}
            subredditsRejected={subredditsRejected}
            handleSelectedSubreddit={handleSelectedSubreddit}
          />
        )}
      </div>
    </div>
  );
};

export default SearchInput;
