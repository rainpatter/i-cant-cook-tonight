import { useEffect } from "react";
import * as RecipeApi from "../../utils/recipes_api";
import { useState } from "react";
import { Badge } from "@mantine/core";
import "./Profile.css";

export default function Profile({ userId }) {
  const [userRecipes, setUserRecipes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [ showingIndex, setShowingIndex ] = useState([])

  useEffect(() => {
    RecipeApi.getRecipesForUser(userId).then((data) => {
      setUserRecipes([...data, ...userRecipes]);
    });
  }, []);

  function handleChange(evt) {
    let input = evt.target.value;
    setSearchText(input);
  }

  function handleClick() {
    let searchRecipes = userRecipes.filter((recipe) => {
      if (
        recipe.json_build_object.title
          .toUpperCase()
          .includes(searchText.toUpperCase())
      ) {
        return recipe;
      }
    });
    setUserRecipes(searchRecipes);
    setHasSearched(true);
  }

  function handleReload() {
    RecipeApi.getRecipesForUser(userId).then((data) => {
      setUserRecipes([...data, ...userRecipes]);
    });
    setHasSearched(false);
  }

  function handleShow(i) {
    console.log(i)
      setShowingIndex([...showingIndex, i])
    }

    function handleHide(i) {
      console.log(i)
      console.log(showingIndex)
        let filteredIndexes = showingIndex.filter(
          (num => num != i)
        )
        console.log(filteredIndexes)
      setShowingIndex([ ... filteredIndexes])
      
    
  }

  return (
    <>
      <div className="user-recipes">
        {!hasSearched ? (
          <div className="ingredient-form">
            <input
              type="text"
              onChange={handleChange}
              name="search-recipes-bar"
            />

            <button onClick={handleClick}>Search your recipes</button>
          </div>
        ) : (
          <div className="ingredient-form">
            {" "}
            <button onClick={handleReload}>See all recipes</button>
          </div>
        )}
        {userRecipes.map((recipe, idx) => (
          <div className="user-recipe-card">
            <h1>{recipe.json_build_object.title}</h1>
            <img src={recipe.json_build_object.image} alt="" />
            <Badge variant="outline" color="gray" radius="md">
              Ready in {recipe.json_build_object.readyInMinutes} minutes
            </Badge>
            <h1>ingredients</h1>
            {recipe.json_build_object.ingredients.map((ingredient) => (
              <p>
                {Math.round(ingredient.metricAmount)} {ingredient.unitLong}{" "}
                {ingredient.originalName}{" "}
              </p>
            ))}
            { showingIndex.includes(idx) ?
            <div>
            <h1>instructions</h1>
            {recipe.json_build_object.steps.map((instruction) => (
              <p>{instruction.stepContent}</p>
            ))}
            <div className="ingredient-form">
            {" "}
            <button onClick={() => handleHide(idx)}>hide instructions</button>
          </div>
            </div> : <div className="ingredient-form">
            {" "}
            <button onClick={() => handleShow(idx)}>show instructions</button>
          </div>
        }
          </div>
        ))}
      </div>
    </>
  );
}
