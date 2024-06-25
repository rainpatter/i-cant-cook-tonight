import { getIngredients } from "../../utils/spoon_api";

export default function LoadRecipes({
  setHasSearched,
  recipes,
  setRecipes,
  chosenIngredients,
}) {
  async function handleClick() {
    console.log(chosenIngredients);

    setHasSearched(true);

    let recipeObj = await getIngredients(chosenIngredients);
    console.log(recipeObj);
    let recipeArray = recipeObj.results;
    console.log(recipeArray);

    setRecipes([...recipeArray, ...recipes]);
  }

  return (
    <section>
      <h3>you've chosen...</h3>
      <div>
        {chosenIngredients.map((ing) => (
          <div>{ing}</div>
        ))}
      </div>
      <button onClick={handleClick}>Search</button>
    </section>
  );
}
