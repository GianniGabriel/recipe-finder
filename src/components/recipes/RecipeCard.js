import React from "react";

import styles from "./RecipeCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const {
  recipeCardContainer,
  recipeCardInfo,
  recipeTitle,
  recipeImageContainer,
  recipeImage,
  recipeIngredientList,
  usedIngredient,
  missedIngredient,
  recipeTime,
  recipeLink,
} = styles;

const RecipeCard = ({ recipe }) => {
  const { image, title } = recipe;
  console.log(recipe);

  return (
    <div className={recipeCardContainer}>
      <div className={recipeImageContainer}>
        <img className={recipeImage} src={image} alt={title} />
      </div>
      <div className={recipeCardInfo}>
        <p className={recipeTitle}>{title}</p>
        <div className={recipeIngredientList}>
          {recipe.usedIngredients.map((ingredient) => (
            <p key={ingredient.id} className={usedIngredient}>
              {ingredient.name}
            </p>
          ))}
          {recipe.missedIngredients.map((ingredient) => (
            <p key={ingredient.id} className={missedIngredient}>
              {ingredient.name}
            </p>
          ))}
          {recipe.unusedIngredients.map((ingredient) => (
            <p key={ingredient.id} className={missedIngredient}>
              {ingredient.name}
            </p>
          ))}
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          possimus?
        </p>
        <p className={recipeTime}>15 mins</p>
        <a className={recipeLink} href="#">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={"lg"} />
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
