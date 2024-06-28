

import IngredientPicker from "../../components/IngredientPicker/IngredientPicker";
import SearchArea from "../../components/SearchArea/SearchArea";
import LoadRecipes from "../../components/LoadRecipes/LoadRecipes";
import './Dashboard.css'


export default function Dashboard({setHasSearched, recipes, setRecipes, chosenIngredients, setChosenIngredients, allIngredients, setAllIngredients}) {
  
    

  return (
    <>
        <section className="load-recipes">
            <LoadRecipes
            setHasSearched={setHasSearched}
            recipes={recipes}
            setRecipes={setRecipes}
            chosenIngredients={chosenIngredients}
            setChosenIngredients={setChosenIngredients}
            />
        </section>
            <section className="ingredient-picker">
                
                <IngredientPicker
                    chosenIngredients={chosenIngredients}
                    setChosenIngredients={setChosenIngredients}
                    allIngredients={allIngredients}
                    setAllIngredients={setAllIngredients}
                />
        </section>
        <section className="search-area">
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
    </>
    
  );
}
