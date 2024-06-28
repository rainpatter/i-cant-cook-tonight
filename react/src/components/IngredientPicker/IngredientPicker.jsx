import { useState } from "react";
import ingredientData from "../../../public/ingredient_data.json";

import './IngredientPicker.css'
import { useEffect } from "react";

import { Button } from '@mantine/core';


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
          <div className="ingredient-div" onMouseEnter={() => handleClick(ingredient.name)} onMouseLeave={() => handleRemove(ingredient.name)}> 
            <div className="fake-ingredient-button"><h1>{ingredient.name}</h1></div>
            <div className="ingredients-list" >
              {visible.includes(ingredient.name)
                ? ingredient.items.map((item) => (
                  <Button variant="filled" color="gray" size="l"
                  className="ingredient-button"
                  onClick={() => addIngredient(item)}
                >
                  {item}
                </Button>
                  ))
                : ''}
            </div>
            
          </div>
        </>
      ))}
    </>
    
  );
}
