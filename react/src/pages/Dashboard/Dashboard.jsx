import { useState } from "react";
import Recipes from "../Recipes/Recipes";
import Main from "../Main/Main";

export default function Dashboard({userId, user}) {
    let [hasSearched, setHasSearched] = useState(false);
  let [recipes, setRecipes] = useState([]);
  let [chosenIngredients, setChosenIngredients] = useState([]);
  let [currentRecipe, setCurrentRecipe] = useState({});

  return (
    <>
      {!hasSearched ? (
        <Main
          setHasSearched={setHasSearched}
          recipes={recipes}
          setRecipes={setRecipes}
          chosenIngredients={chosenIngredients}
          setChosenIngredients={setChosenIngredients}
        />
      ) : (
        <Recipes
            userId={userId}
            user={user}
          setHasSearched={setHasSearched}
          recipes={recipes}
          setRecipes={setRecipes}
          setChosenIngredients={setChosenIngredients}
          currentRecipe={currentRecipe}
          setCurrentRecipe={setCurrentRecipe}
        />
      )}
    </>
  );
}