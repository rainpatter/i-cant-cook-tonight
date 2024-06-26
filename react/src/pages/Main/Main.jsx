import Header from "../../components/Header/Header";
import IngredientPicker from "../../components/IngredientPicker/IngredientPicker";
import SearchArea from "../../components/SearchArea/SearchArea";
import LoadRecipes from "../../components/LoadRecipes/LoadRecipes";
import { useState } from "react";

export default function Main({
  setHasSearched,
  recipes,
  setRecipes,
  chosenIngredients,
  setChosenIngredients,
}) {
  return (
    <>
      <section className="page-middle">
        <div>
          <IngredientPicker
            chosenIngredients={chosenIngredients}
            setChosenIngredients={setChosenIngredients}
          />
        </div>
        <div>
          <SearchArea
            setHasSearched={setHasSearched}
            recipes={recipes}
            setRecipes={setRecipes}
            chosenIngredients={chosenIngredients}
            setChosenIngredients={setChosenIngredients}
          />
        </div>
      </section>
      <section className="page-lower">
        <LoadRecipes
          setHasSearched={setHasSearched}
          recipes={recipes}
          setRecipes={setRecipes}
          chosenIngredients={chosenIngredients}
          setChosenIngredients={setChosenIngredients}
        />
      </section>
    </>
  );
}
