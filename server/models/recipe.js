const db = require("../db");

async function addRecipe(recipeObj, userId) {
  let sql = `
        INSERT INTO saved_recipes(
            user_id,
            spoonacular_dish_id,
            title,
            image,
            vegetarian,
            vegan,
            gluten_free,
            ready_in_minutes,
            source_url
        )
        VALUES
        (
            $1,
            $2,
            $3,
            $4,
            $5,
            $6,
            $7,
            $8,
            $9
        )
        RETURNING id;
    `;

  let result = await db.query(sql, [
    userId,
    recipeObj.id,
    recipeObj.title,
    recipeObj.image,
    recipeObj.vegetarian,
    recipeObj.vegan,
    recipeObj.glutenFree,
    recipeObj.readyInMinutes,
    recipeObj.sourceUrl,
  ]);
  console.log(result.rows[0].id);

  let recipeId = result.rows[0].id;

  let ingredientsSql = `
        INSERT INTO recipe_ingredients( 
            metric_amount,
            metric_unit_long,
            original_name
        )
        VALUES (
        $1,
        $2,
        $3
        )
        RETURNING id;
        ;
      `;

  let ingJoinSql = `
      INSERT INTO 
      recipe_ingredients_join(
        recipe_id,
        ingredient_id
      )
        VALUES
        (
        $1, $2
        )
    RETURNING *;
    `;

  for (ingredient of recipeObj.extendedIngredients) {
    let result = await db.query(ingredientsSql, [
      ingredient.measures.metric.amount,
      ingredient.measures.metric.unitLong,
      ingredient.originalName,
    ]);

    let ingredientId = result.rows[0].id;
    let secondRes = await db.query(ingJoinSql, [recipeId, ingredientId]);
    console.log(secondRes.rows);
  }

  let stepsSql = `
        INSERT INTO recipe_steps( 
            step_number,
            step_content

        )
        VALUES (
        $1,
        $2
        )
        RETURNING id
        ;
    `;

  let stepJoinSql = `
      INSERT INTO 
      recipe_steps_join(
        recipe_id,
        step_id
      )
        VALUES
        (
        $1, $2
        )
    RETURNING *;
    `;

  for (step of recipeObj.analyzedInstructions[0].steps) {
    let stepsResult = await db.query(stepsSql, [step.number, step.step]);

    let stepId = stepsResult.rows[0].id;
    let secondRes = await db.query(stepJoinSql, [recipeId, stepId]);

    console.log(secondRes);
  }
}

async function getRecipesByUserId(userId) {
  let sql = `
    SELECT json_build_object(
            'id', id,
            'userId', user_id,
            'title', title,
            'spoonacularId', spoonacular_dish_id,
            'image', image,
            'vegetarian', vegetarian,
            'vegan', vegan,
            'glutenFree', gluten_free,
            'readyInMinutes', ready_in_minutes,
            'sourceUrl', source_url,
            'ingredients', (
            SELECT json_agg(json_build_object(
            'metricAmount', recipe_ingredients.metric_amount,
            'unitLong', recipe_ingredients.metric_unit_long,
            'originalName', recipe_ingredients.original_name
            ))
            FROM recipe_ingredients_join JOIN 
            recipe_ingredients ON ingredient_id = recipe_ingredients.id
            WHERE recipe_id=saved_recipes.id
            ),
						'steps', (
              SELECT json_agg(json_build_object(
              'stepNumber', step_number,
                'stepContent', step_content
              ))
              FROM recipe_steps_join JOIN
              recipe_steps ON step_id = recipe_steps.id
              WHERE recipe_id=saved_recipes.id)
)
        FROM saved_recipes
        WHERE user_id = $1
    ;`;

  return db.query(sql, [userId]).then((result) => result.rows);
}

const Recipe = {
  addRecipe,
  getRecipesByUserId,
};

module.exports = Recipe;
