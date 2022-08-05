const express = require("express");
const router = express.Router();
const recipeController = require("../controller/recipe");

router.post("/", recipeController.createRecipe);
router.get("/", recipeController.getRecipe);

module.exports = router;
