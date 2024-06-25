const express = require("express");
const router = express.Router();
require("dotenv").config();
const axios = require("axios");

apiKey = process.env.SPOONACULAR_API_KEY;

router.post("/ingredients/find", (req, res) => {
  let { ingredients } = req.body;

  let ingredientsString = ingredients.join(",+");

  fetch(
    `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredientsString}&number=3&apiKey=${apiKey}&addRecipeInformation=true&addRecipeInstructions=true&sort=min-missing-ingredients&fillIngredients=true`
  )
    .then((res) => res.json())
    .then((result) => res.status(200).json(result));
});

router.post("/ingredients/analyse", (req, res) => {
  let { searchIngredients } = req.body;

  fetch(
    `https://api.spoonacular.com/recipes/queries/analyze?q=${searchIngredients}&apiKey=${apiKey}`
  )
    .then((res) => res.json())
    .then((result) => res.status(200).json(result));
});

module.exports = router;
