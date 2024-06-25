
export async function getIngredients(array) {

    let data = {
        ingredients: array
    }

    let res = await fetch(`/ingredients/find`,
        {method: 'POST',
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(
            data
        )
        }
    )

    let recipes = await res.json()

    return recipes
}

