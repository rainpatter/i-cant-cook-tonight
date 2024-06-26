const db = require('../db')

async function addRecipe(recipeObj, userId) {


    let sql = `
        INSERT INTO saved_recipes(
            user_id,
            spoonacular_dish_id,
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
            $8
        )
        RETURNING id;
    `

    let result = await db.query(sql, [userId, recipeObj.id, recipeObj.image, recipeObj.vegetarian, recipeObj.vegan, recipeObj.glutenFree, recipeObj.readyInMinutes, recipeObj.sourceUrl])
    console.log(result.rows[0].id)

    let recipeId = result.rows[0].id

    let ingredientsSql = `
        INSERT INTO recipe_ingredients(
            recipe_id, 
            metric_amount,
            metric_unit_long,
            original_name
        )
        VALUES (
        $1,
        $2,
        $3,
        $4
        )
        RETURNING *;
        ;
      `

      for (ingredient of recipeObj.extendedIngredients) {

        let result = await db.query(
            ingredientsSql, [
                recipeId,
                ingredient.measures.metric.amount,
                ingredient.measures.metric.unitLong,
                ingredient.originalName
            ]
        )
        console.log(result.rows[0])

      }
    
    let stepsSql = `
        INSERT INTO recipe_steps(
            recipe_id, 
            step_number,
            step_content

        )
        VALUES (
        $1,
        $2,
        $3
        )
        RETURNING *
        ;
    `

    for (step of recipeObj.analyzedInstructions[0].steps) {

        let result = await db.query(stepsSql, [
            recipeId,
            step.number,
            step.step
        ])

        console.log(result.rows[0])

    }

    db.end()

}

const Recipe = {
    addRecipe
}

module.exports = Recipe