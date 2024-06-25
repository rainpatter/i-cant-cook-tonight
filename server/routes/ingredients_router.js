const express = require('express')
const router = express.Router()
require('dotenv').config()
const axios = require('axios')

apiKey = process.env.SPOONACULAR_API_KEY


router.post('/ingredients/find', (req, res) => {
    
    let {ingredients} = req.body

    let ingredientsString = ingredients.join(',+')


    fetch(`https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredientsString}&number=3&apiKey=${apiKey}&addRecipeInformation=true&addRecipeInstructions=true&sort=min-missed-ingredients&maxReadyTime=30`)
    .then(res => res.json())
    .then(result => res.status(200).json(result))
    
})


module.exports = router