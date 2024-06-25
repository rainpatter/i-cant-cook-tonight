import { useState } from "react";
import { analyseQuery } from "../../utils/spoon_api";

export default function SearchArea({
  chosenIngredients,
  setChosenIngredients,
}) {
  let [text, setText] = useState("");

  function handleChange(evt) {
    let input = evt.target.value;
    console.log(input);
    setText(evt.target.value);
  }

  async function handleClick() {
    let searchIngredients = await analyseQuery();
    let ingredientNames = searchIngredients.ingredients.map(
      (ingredient) => ingredient.name
    );
    setChosenIngredients([...chosenIngredients, ...ingredientNames]);
  }

  return (
    <>
      <div>
        <label htmlFor="" name="search-ingredients-bar">
          {" "}
          Anything else?
        </label>
        <input
          type="text"
          onChange={handleChange}
          name="search-ingredients-bar"
        />
        <button onClick={handleClick}>Search for ingredients</button>
      </div>
    </>
  );
}
