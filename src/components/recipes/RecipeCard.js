import React, { useContext, useState } from "react";
import RecipeContext from "../../context/recipes/RecipeContext";
import RecipeModal from "./RecipeModal";

import styles from "./RecipeCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpRightFromSquare,
  faStar as faStarSolid,
} from "@fortawesome/free-solid-svg-icons";

const {
  recipeCardContainer,
  recipeCardInfoContainer,
  recipeCardInfo,
  recipeTitle,
  recipeBtn,
  unsavedRecipeBtn,
  savedRecipeBtn,
  recipeImageContainer,
  recipeImage,
  recipeIngredientList,
  usedIngredient,
  unusedIngredient,
  missedIngredient,
  recipeTime,
  recipeLink,
} = styles;

const RecipeCard = ({ recipe, idx }) => {
  const { recipesInfo } = useContext(RecipeContext);
  const { image, title } = recipe;

  const [isModalShown, setIsModalShown] = useState(false);
  const isRecipeInStorage = JSON.parse(
    localStorage.getItem("savedRecipes")
  )?.includes(recipe.id);
  const [isRecipeSaved, setIsRecipeSaved] = useState(isRecipeInStorage);

  const toggleModal = (e) => {
    if (e.target.parentElement?.id !== "ignore-modal") {
      setIsModalShown(true);
    }
  };

  const onRecipeSaveToggle = () => {
    let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes"));
    savedRecipes = savedRecipes ? savedRecipes : [];

    if (!isRecipeSaved) {
      savedRecipes.push(recipe.id);
    } else {
      savedRecipes = savedRecipes.filter((recipeId) => recipeId !== recipe.id);
    }
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
    setIsRecipeSaved(!isRecipeSaved);
  };

  return (
    <>
      <div className={recipeCardContainer} onClick={toggleModal}>
        <div className={recipeImageContainer}>
          <img className={recipeImage} src={image} alt={title} />
        </div>
        <div className={recipeCardInfoContainer}>
          <div className={recipeCardInfo}>
            <div className={recipeTitle}>
              <p>{title}</p>
              <button
                id="ignore-modal"
                className={`${recipeBtn} ${
                  !isRecipeSaved ? unsavedRecipeBtn : savedRecipeBtn
                }`}
                onClick={onRecipeSaveToggle}
              >
                {isRecipeSaved ? (
                  <FontAwesomeIcon id="ignore-modal" icon={faStarSolid} />
                ) : (
                  <FontAwesomeIcon id="ignore-modal" icon={faStar} />
                )}
              </button>
            </div>
            <div className={recipeIngredientList}>
              {recipe.usedIngredients.map((ingredient) => (
                <p key={ingredient.id} className={usedIngredient}>
                  {ingredient.name}
                </p>
              ))}
              {recipe.unusedIngredients.map((ingredient) => (
                <p key={ingredient.id} className={unusedIngredient}>
                  {ingredient.name}
                </p>
              ))}
              {recipe.missedIngredients.map((ingredient) => (
                <p key={ingredient.id} className={missedIngredient}>
                  {ingredient.name}
                </p>
              ))}
            </div>
            <p>
              {recipesInfo
                ? `${recipesInfo[idx].summary
                    .replaceAll(/<[^>]*>/g, "")
                    .slice(0, 250)
                    .trim()}...`
                : "N/A"}
            </p>
          </div>
          <p className={recipeTime}>
            {recipesInfo ? recipesInfo[idx].readyInMinutes : "--"} mins
          </p>
          <a
            className={recipeLink}
            id="ignore-modal"
            rel="noreferrer"
            target="_blank"
            href={recipesInfo ? recipesInfo[idx].spoonacularSourceUrl : "#"}
          >
            <FontAwesomeIcon
              id="ignore-modal"
              icon={faArrowUpRightFromSquare}
              size={"lg"}
            />
          </a>
        </div>
      </div>
      <RecipeModal
        isModalShown={isModalShown}
        setIsModalShown={setIsModalShown}
        recipe={recipe}
        recipeInfo={recipesInfo[idx]}
      />
    </>
  );
};

export default RecipeCard;
