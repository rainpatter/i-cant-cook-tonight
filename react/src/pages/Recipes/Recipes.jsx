import { useState } from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

export default function Recipes({
  setHasSearched,
  recipes,
  setRecipes,
  setChosenIngredients,
  currentRecipe,
  setCurrentRecipe,
}) {
  let [isShowingSingleRecipe, setShowingRecipe] = useState(false);

  function handleGoBack() {
    setShowingRecipe(false);
  }

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
            <h1>ingredients</h1>
            {currentRecipe.extendedIngredients.map((ingredient) => (
              <p>{ingredient.original}</p>
            ))}
          </div>
          <div className="recipe-instructions">
            <h1>instructions</h1>
            {currentRecipe.analyzedInstructions[0].steps.map((instruction) => (
              <p>{instruction.step}</p>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
