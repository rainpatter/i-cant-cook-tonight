import { useState } from 'react'
import Main from './pages/Main/Main'
import Recipes from './pages/Recipes/Recipes'


function App() {
  
  let [hasSearched, setHasSearched] = useState(false)
  let [ recipes, setRecipes ] = useState([])
  let [ chosenIngredients, setChosenIngredients ] = useState([])


  return (
    <>
      {!hasSearched ?

      < Main setHasSearched={setHasSearched} recipes={recipes} setRecipes={setRecipes} chosenIngredients={chosenIngredients} setChosenIngredients={setChosenIngredients}/>
      
      :
      <Recipes setHasSearched={setHasSearched} recipes={recipes} setRecipes={setRecipes} setChosenIngredients={setChosenIngredients}/>
      }
      
    </>
  )
}

export default App