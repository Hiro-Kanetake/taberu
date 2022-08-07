const knex = require("../db/knex/knex");

const RECIPE_TABLE = "recipe";
const DAILY_MENU_TABLE = "daily_menu";

module.exports = {
  RECIPE_TABLE,

  createRecipe(data) {
    return knex.insert(data).into(RECIPE_TABLE);
  },

  getRecipe() {
    return knex.select("*").from(RECIPE_TABLE);
  },

  createPlanMenu(data) {
    return knex.insert(data).into(DAILY_MENU_TABLE);
  },

  getPlanMenu(receivedId) {
    return knex
      .select("recipe_id", "name", "date")
      .from(DAILY_MENU_TABLE)
      .where({ account_id: receivedId })
      .join("recipe", "daily_menu.recipe_id", "=", "recipe.id");
  },
};
