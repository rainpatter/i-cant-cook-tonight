import { useState } from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import * as RecipeApi from '../../utils/recipes_api'

export default function Recipes({
  setHasSearched,
  recipes,
  setRecipes,
  setChosenIngredients,
  currentRecipe,
  setCurrentRecipe,
  userId,
  user
}) {
  let [isShowingSingleRecipe, setShowingRecipe] = useState(false);

  function handleGoBack() {
    setShowingRecipe(false);
  }

  function handleClick() {
    RecipeApi.saveRecipe([currentRecipe, userId])
  }

  console.log(currentRecipe)

  return (
    <>
      {!isShowingSingleRecipe ? (
        <RecipeCard
          setHasSearched={setHasSearched}
          setRecipes={setRecipes}
          setChosenIngredients={setChosenIngredients}
          setCurrentRecipe={setCurrentRecipe}
          recipes={recipes}
          setShowingRecipe={setShowingRecipe}
        />
      ) : (
        <div>
          <p>{currentRecipe.title}</p>
          <button onClick={handleGoBack}>go back</button>
          <img src={currentRecipe.image} alt="" />
          <div className="recipe-ingredients">
            <p>servings: {currentRecipe.servings}</p>
            <h1>ingredients</h1>
            {currentRecipe.extendedIngredients.map((ingredient) => (
              <p>{ingredient.measures.metric.amount} {ingredient.measures.metric.unitLong} {ingredient.originalName} </p>
            ))}
          </div>
          <div className="recipe-instructions">
            <h1>instructions</h1>
            {currentRecipe.analyzedInstructions[0].steps.map((instruction) => (
              <p>{instruction.step}</p>
            ))}
          </div>
          <p><a href={currentRecipe.sourceUrl}>link to original recipe</a></p>
          <div className="user-features">
            {user ? <button onClick={handleClick}>save to recipes</button> : ''}
            <p>was this easy?</p>
          </div>
        </div>
      )}
    </>
  );
}
