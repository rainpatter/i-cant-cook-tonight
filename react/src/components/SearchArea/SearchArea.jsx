import { useState } from "react";
import { analyseQuery } from "../../utils/spoon_api";
import "./SearchArea.css";

export default function SearchArea({
  chosenIngredients,
  setChosenIngredients,
  allIngredients,
  setAllIngredients,
}) {
  let [text, setText] = useState("");

  function handleChange(evt) {
    let input = evt.target.value;

    setText(input);
  }

  async function handleClick() {
    let searchIngredients = await analyseQuery(text);
    let ingredientNames = searchIngredients.ingredients.map(
      (ingredient) => ingredient.name
    );
    setChosenIngredients([...chosenIngredients, ...ingredientNames]);
  }

  return (
    <>
      <h1>anything missing?</h1>
      <br />
      <div className="ingredient-form">
        <textarea onChange={handleChange} name="search-ingredients-bar">
          type your ingredients
        </textarea>

        <button onClick={handleClick}>Search for ingredients</button>
      </div>
    </>
  );
}
