const express = require("express");
const router = express.Router();
require("dotenv").config();
const Recipe = require("../models/recipe");

router.post("/api/recipes/save", (req, res) => {
  let [recipe, userId] = req.body;

  Recipe.addRecipe(recipe, userId);
});

router.get("/api/recipes/:userid", (req, res) => {
  let userId = req.params.userid;
  Recipe.getRecipesByUserId(userId).then((data) => res.status(200).json(data));
});

module.exports = router;
