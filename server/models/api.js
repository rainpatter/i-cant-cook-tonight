require('dotenv').config()

apiKey = process.env.SPOONACULAR_API_KEY

fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=${apiKey}`)
    .then(res => res.json())
    .then(data => console.log(data))
