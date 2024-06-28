import { getIngredients } from "../../utils/spoon_api";
import './LoadRecipes.css'
import { Link } from 'react-router-dom'

export default function LoadRecipes({
  setHasSearched,
  recipes,
  setRecipes,
  chosenIngredients,
  setChosenIngredients,
}) {
  async function handleClick() {
    console.log(chosenIngredients);

    setHasSearched(true);

    let recipeObj = await getIngredients(chosenIngredients);

    let recipeArray = recipeObj.results;

    setRecipes([...recipeArray, ...recipes]);
  }

  function handleDelete(index) {
    let filteredIngredients = chosenIngredients.filter(
      (ing, idx) => idx != index
    );
    setChosenIngredients([...filteredIngredients]);
  }

  return (
    <div className="load-recipes-search-wrapper">
        {chosenIngredients.length != 0 ?
          <div className="search-text-div">
            <h1>making dinner with</h1>
          </div> : <div className="search-text-div">
            <h1>choose something!</h1>
          </div>}
        <div className='load-ingredients'>
          {chosenIngredients.map((ing, idx) => (
            
              <button className="load-ingredient-button" onClick={() => handleDelete(idx)}>{ing} x</button>
     

          ))}
        </div>
        {chosenIngredients.length != 0 ?
        
           <div className="fake-search-button"><Link to='/recipes' onClick={handleClick}>
          Search for recipes
        </Link></div>:''}
        
      </div>
  );
}
