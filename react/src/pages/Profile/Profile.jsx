import { useEffect } from "react";
import * as RecipeApi from "../../utils/recipes_api";
import { useState } from "react";
import './Profile.css'

export default function Profile({ userId }) {
  const [userRecipes, setUserRecipes] = useState([]);

  useEffect(() => {
    RecipeApi.getRecipesForUser(userId).then((data) => {
      console.log(data);
      setUserRecipes([...data, ...userRecipes]);
    });
  }, []);



  return (
    <>
      

        {userRecipes.map((recipe) => (
          <div className="user-recipe-card">
            <h1>{recipe.json_build_object.title}</h1>
            <img src={recipe.json_build_object.image} alt="" />
            <p>Ready in {recipe.json_build_object.readyInMinutes} minutes</p>
            <h1>ingredients</h1>
            {recipe.json_build_object.ingredients.map((ingredient) => (
              <p>
                {Math.round(ingredient.metricAmount)} {" "}
                {ingredient.unitLong} {ingredient.originalName}{" "}
              </p>
            ))}
            <h1>instructions</h1>
            {recipe.json_build_object.steps.map((instruction) => (
              <p>{instruction.stepContent}</p>
            ))}
          </div>
        ))}
      
    </>
  );
}
