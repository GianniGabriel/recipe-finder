import React, { useContext, useMemo } from "react";
import RecipeContext from "../../context/recipes/RecipeContext";

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
  recipeTime,
  recipeLink,
} = styles;

const RecipeCard = ({ recipe }) => {
  const { image, title } = recipe;
  const { ingredientList, recipes } = useContext(RecipeContext);
  //eslint-disable-next-line
  const staticIngredientList = useMemo(() => ingredientList, [recipes]);
  return (
    <div className={recipeCardContainer}>
      <div className={recipeImageContainer}>
        <img className={recipeImage} src={image} alt={title} />
      </div>
      <div className={recipeCardInfo}>
        <p className={recipeTitle}>{title}</p>
        <div className={recipeIngredientList}>
          {staticIngredientList.map((ingredient) => (
            <p key={ingredient} className={usedIngredient}>
              {ingredient}
            </p>
          ))}
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          possimus?
        </p>
        <p className={recipeTime}>15 mins</p>
        <FontAwesomeIcon
          className={recipeLink}
          icon={faArrowUpRightFromSquare}
          size={"lg"}
        />
      </div>
    </div>
  );
};

export default RecipeCard;
