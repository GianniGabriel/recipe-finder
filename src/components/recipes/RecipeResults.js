import React, { useContext } from "react";
import RecipeContext from "../../context/recipes/RecipeContext";
import RecipeCard from "./RecipeCard";

import styles from "./RecipeResults.module.css";

const { recipesContainer } = styles;

const RecipeResults = () => {
  const { recipes } = useContext(RecipeContext);
  return (
    <div className={recipesContainer}>
      {recipes &&
        recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
    </div>
  );
};

export default RecipeResults;
