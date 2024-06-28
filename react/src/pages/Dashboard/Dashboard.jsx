
import Recipes from "../Recipes/Recipes";

import IngredientPicker from "../../components/IngredientPicker/IngredientPicker";
import SearchArea from "../../components/SearchArea/SearchArea";
import LoadRecipes from "../../components/LoadRecipes/LoadRecipes";
import { useState } from "react";


export default function Dashboard({setHasSearched, recipes, setRecipes, chosenIngredients, setChosenIngredients, allIngredients, setAllIngredients}) {
  

  return (
    <>
    <div className="dashboard-wrapper">
      
        <div className="main-wrapper">
        <section className="main-top">
            <LoadRecipes
            setHasSearched={setHasSearched}
            recipes={recipes}
            setRecipes={setRecipes}
            chosenIngredients={chosenIngredients}
            setChosenIngredients={setChosenIngredients}
            />
        </section>
        <section className="main-middle">
            <SearchArea
                setHasSearched={setHasSearched}
                recipes={recipes}
                setRecipes={setRecipes}
                chosenIngredients={chosenIngredients}
                setChosenIngredients={setChosenIngredients}
                allIngredients={allIngredients}
                setAllIngredients={setAllIngredients}
            />
            </section>
            <div className="prompt">
            choose some...
            </div>
            <section className="main-lower">
            
                <IngredientPicker
                    chosenIngredients={chosenIngredients}
                    setChosenIngredients={setChosenIngredients}
                    allIngredients={allIngredients}
                    setAllIngredients={setAllIngredients}
                />
            
        </section>
        </div>
      
      </div>
    </>
    
  );
}
