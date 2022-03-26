import React, { useContext } from "react";
import RecipeContext from "../../../context/recipes/RecipeContext";
import IngredientForm from "./IngredientForm";

import styles from "./SearchArea.module.css";
import IngredientList from "./IngredientList";

const { ingredientSearchContainer, searchBtn , notFound } = styles;

const SearchArea = () => {
  const { getRecipes , recipes} = useContext(RecipeContext);

  return (
    <div className={ingredientSearchContainer}>
      <IngredientForm />
      <IngredientList />
      <button onClick={getRecipes} className={searchBtn}>
        Search
      </button>
      {recipes?.length === 0 && (<p className={notFound}>No recipes found!</p>)}
    </div>
    
  );
  
};

export default SearchArea;
