import { getIngredients } from "../../utils/spoon_api";

export default function LoadRecipes({
  setHasSearched,
  recipes,
  setRecipes,
  chosenIngredients,
  setChosenIngredients,
}) {
  async function handleClick() {
    console.log(chosenIngredients);

    setHasSearched(true);

    let recipeObj = await getIngredients(chosenIngredients);

    let recipeArray = recipeObj.results;

    setRecipes([...recipeArray, ...recipes]);
  }

  function handleDelete(index) {
    let filteredIngredients = chosenIngredients.filter(
      (ing, idx) => idx != index
    );
    setChosenIngredients([...filteredIngredients]);
  }

  return (
    <section>
      <h3>you've chosen...</h3>
      <div>
        {chosenIngredients.map((ing, idx) => (
          <div>
            {ing}
            <button onClick={() => handleDelete(idx)}>x</button>
          </div>
        ))}
      </div>
      <button className="search-button" onClick={handleClick}>Search</button>
    </section>
  );
}
