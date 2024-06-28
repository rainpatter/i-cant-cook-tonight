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
    // LATEST
    // let strings = []
    // if (input.match("[,s]")) {
    //         let splitString = input.split(/,\s*/)
    //         strings = splitString
    //         // console.log(strings)
    // }

    // console.log(strings)
    // if (strings.length > 0) {
    //     console.log(strings.length)
    //     for (i of strings) {
    //         console.log(i)
    //         for (type of allIngredients) {
    //                         console.log(type.items.filter(listItem => elem.toUpperCase().includes(listItem.toUpperCase())))
    //     }
    // }
    // }
    // IN PROGRESS
    // if (input.match("[,s]")) {
    //     let splitString = input.split(/,\s*/)
    //     strings = splitString
    //     console.log(splitString)
    //     for (ing of splitSring) {
    //         for (type of allIngredients) {
    //             console.log(type.items.filter(listItem => ing.toUpperCase().includes(listItem.toUpperCase())))
    //             }
    //         }
    //     }
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
