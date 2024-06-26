const express = require("express");
const router = express.Router();
require("dotenv").config();
const Recipe = require('../models/recipe')

router.post('/api/recipes', (req, res) => {

    let [ recipe, userId ] = req.body
   

    Recipe.addRecipe(recipe, userId)

})

module.exports = router