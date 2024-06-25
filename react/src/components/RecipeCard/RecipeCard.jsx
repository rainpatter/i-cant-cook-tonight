export default function RecipeCard({
  setHasSearched,
  setRecipes,
  setChosenIngredients,
  setCurrentRecipe,
  setShowingRecipe,
  recipes,
}) {
  function handleSearchClick() {
    setHasSearched(false);
    setRecipes([]);
    setChosenIngredients([]);
  }

  function handleRecipeClick(index) {
    let recipe = recipes[index];
    setCurrentRecipe({ ...recipe });
    setShowingRecipe(true);
  }

  return (
    <div>
      <h1>showing recipes now</h1>
      <button onClick={handleSearchClick}>search again</button>
      <div className="recipe-card">
        {recipes.map((recipe, idx) => (
          <>
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt="" />
            <p>Ready in {recipe.readyInMinutes} minutes</p>
            <p>uses</p>{" "}
            {recipe.usedIngredients.map((ingredient) => (
              <p>{ingredient.name}</p>
            ))}
            <p>missing ingredients: {recipe.missedIngredientCount}</p>
            <p>
              extra ingredients:{" "}
              {recipe.missedIngredients.map((ingredient) => (
                <p>{ingredient.name}</p>
              ))}
            </p>
            <button onClick={() => handleRecipeClick(idx)}>Check recipe</button>
          </>
        ))}
      </div>
    </div>
  );
}
