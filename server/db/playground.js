require('dotenv').config()


apiKey = process.env.SPOONACULAR_API_KEY

fetch(`https://api.spoonacular.com/recipes/queries/analyze?q=rice+with+soy+sauce&apiKey=${apiKey}`)
    .then(res => res.json())
    .then(result => console.log(result))