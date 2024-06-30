import { useState } from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

import SingleRecipe from "../SingleRecipe/SingleRecipe";

export default function Recipes({
  setHasSearched,
  recipes,
  setRecipes,
  setChosenIngredients,
  currentRecipe,
  setCurrentRecipe,
  userId,
  user,
}) {
  let [isShowingSingleRecipe, setShowingRecipe] = useState(false);

  console.log(currentRecipe);

  return (
    <>
      {!isShowingSingleRecipe ? (
        <>
          <RecipeCard
            setHasSearched={setHasSearched}
            setRecipes={setRecipes}
            setChosenIngredients={setChosenIngredients}
            setCurrentRecipe={setCurrentRecipe}
            recipes={recipes}
            setShowingRecipe={setShowingRecipe}
          />
        </>
      ) : (
        <SingleRecipe
          user={user}
          userId={userId}
          currentRecipe={currentRecipe}
          setShowingRecipe={setShowingRecipe}
        />
      )}
    </>
  );
}
