import { SimpleGrid } from "@mantine/core";
import "./RecipeCard.css";
import { Badge } from "@mantine/core";
import { Button } from "@mantine/core";

export default function RecipeCard({
  setHasSearched,
  setRecipes,
  setChosenIngredients,
  setCurrentRecipe,
  setShowingRecipe,
  recipes,
}) {
  function handleRecipeClick(index) {
    let recipe = recipes[index];
    setCurrentRecipe({ ...recipe });
    setShowingRecipe(true);
  }

  return (
    <>
      <div className="recipe-cards-display">
        {recipes.map((recipe, idx) => (
          <>
            <div className="recipe-card" onClick={() => handleRecipeClick(idx)}>
              <h1>{recipe.title}</h1>
              <img src={recipe.image} alt="" />
              <br></br>
              <div className="recipe-info-div">
                <Badge variant="outline" color="gray" radius="md">
                  Ready in {recipe.readyInMinutes} minutes
                </Badge>
                {recipe.vegetarian ? (
                  <Badge color="green" size="sm" radius="md">
                    vegetarian
                  </Badge>
                ) : (
                  ""
                )}
                {recipe.vegan ? (
                  <Badge color="green" size="sm" radius="md">
                    vegan
                  </Badge>
                ) : (
                  ""
                )}
                {recipe.glutenFree ? (
                  <Badge color="green" size="sm" radius="md">
                    gf
                  </Badge>
                ) : (
                  ""
                )}
              </div>
              <section className="used-missing-ingredients-section">
                <div className="used-ingredients-div">
                  <h4>your ingredients</h4>
                  {recipe.usedIngredients.map((ingredient) => (
                    <Badge variant="outline" color="gray" radius="md">
                      {ingredient.name}
                    </Badge>
                  ))}
                </div>
                <div className="missing-ingredients-div">
                  <h4>missing {recipe.missedIngredientCount} ingredients</h4>
                  {recipe.missedIngredients.map((ingredient) => (
                    <Badge variant="outline" color="gray" radius="md">
                      {ingredient.name}
                    </Badge>
                  ))}
                </div>
              </section>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
