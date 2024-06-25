


export default function Recipes({setHasSearched, recipes, setRecipes, setChosenIngredients}) {

   
    
    function handleClick() {
        setHasSearched(false)
        setRecipes([])
        setChosenIngredients([])
    }

    return (
        <>
            <h1>showing recipes now</h1>
            <button onClick={handleClick}>search again</button>
            {recipes.map( recipe =>
                    <h1>{recipe.title}</h1>
            )}
        </>
    )
}