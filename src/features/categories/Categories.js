import React from "react";
import styles from "./Categories.module.css";
import { addSelectedCategory, selecteCategories } from "./categoriesSlice";
import { useSelector, useDispatch } from "react-redux";
import Category from "../../Components/Category/Category";

const Categories = () => {
  const categories = useSelector(selecteCategories);
  const dispatch  = useDispatch();

  const handleClick = (index) => {
    dispatch(addSelectedCategory(index));
  }

  return (
    <div className={styles.CategoriesContainer}>
      {
        categories.map( (category, index) => {
          return <Category categoryInf={category} index={index} handleClick={handleClick} />
        })
      }
    </div>
  )
}

export default Categories;