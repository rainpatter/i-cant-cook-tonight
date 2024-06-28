import { useState } from "react";
import ingredientData from "../../../public/ingredient_data.json";

import './IngredientPicker.css'
import { useEffect } from "react";

export default function IngredientPicker({
  chosenIngredients,
  setChosenIngredients,
  allIngredients,
  setAllIngredients
}) {
  let [visible, setVisible] = useState([]);
  
  
  useEffect(()=> {
    let { ingredients } = ingredientData;
    setAllIngredients([... ingredients])
  }, [])

  function handleClick(cat) {
    setVisible([...visible, cat]);
  }

  function handleRemove(cat) {
    let removedArray = visible.filter((item) => item != cat);
    setVisible([...removedArray]);
  }

  function addIngredient(clickedItem) {
    setChosenIngredients([...chosenIngredients, clickedItem]);
  }

  

  return (
    <>
      {allIngredients.map((ingredient) => (
        <>
          <div className="ingredient-div">
            <h1>{ingredient.name}</h1>
            <div className="ingredients-list">
              {visible.includes(ingredient.name)
                ? ingredient.items.map((item) => (
                    <button
                      className="ingredient-button"
                      onClick={() => addIngredient(item)}
                    >
                      {item}
                    </button>
                  ))
                : ingredient.items.slice(1, 15).map((item) => (
                    <button
                      className="ingredient-button"
                      onClick={() => addIngredient(item)}
                    >
                      {item}
                    </button>
                  ))}
            </div>
            {!visible.includes(ingredient.name) ? (
              <button
                className="ingredient-display"
                onClick={() => handleClick(ingredient.name)}
              >
                Display all
              </button>
            ) : (
              <button
                className="ingredient-display-off"
                onClick={() => handleRemove(ingredient.name)}
              >
                Show fewer
              </button>
            )}
          </div>
        </>
      ))}
    </>
  );
}
