import * as RecipeApi from "../../utils/recipes_api";
import "./SingleRecipe.css";
import { CloseButton } from "@mantine/core";
import { Button } from "@mantine/core";

export default function SingleRecipe({
  currentRecipe,
  user,
  userId,
  setShowingRecipe,
}) {
  function handleClick() {
    RecipeApi.saveRecipe([currentRecipe, userId]);
  }

  function handleGoBack() {
    setShowingRecipe(false);
  }
  return (
    <div className="single-recipe-div">
      <CloseButton size="xl" onClick={handleGoBack}></CloseButton>

      <h1>{currentRecipe.title}</h1>
      <img src={currentRecipe.image} alt="" />
      <div className="recipe-ingredients">
        <p>servings: {currentRecipe.servings}</p>
        <h1>ingredients</h1>
        {currentRecipe.extendedIngredients.map((ingredient) => (
          <p>
            {ingredient.measures.metric.amount}{" "}
            {ingredient.measures.metric.unitLong} {ingredient.originalName}{" "}
          </p>
        ))}
      </div>
      <div className="recipe-instructions">
        <h1>instructions</h1>
        {currentRecipe.analyzedInstructions[0].steps.map((instruction) => (
      
            <p>{instruction.step}</p>
          
        ))}
      </div>
      <div className="user-features">
        {user ? (
          <Button
            variant="light"
            color="orange"
            size="lg"
            radius="md"
            onClick={handleClick}
          >
            save to recipes
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
