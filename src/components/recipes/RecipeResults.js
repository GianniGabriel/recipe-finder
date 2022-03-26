import React, { useContext } from "react";
import RecipeContext from "../../context/recipes/RecipeContext";
import RecipeCard from "./RecipeCard";

const RecipeResults = () => {
  const { recipes } = useContext(RecipeContext);
  return (
    <div>
      {recipes &&
        recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
    </div>
  );
};

export default RecipeResults;
