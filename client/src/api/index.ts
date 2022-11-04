import axios from "axios";
import { recipeInfo, recipeName, reviewRequest } from "../type";
const DB_URL = process.env.REACT_APP_PUBLIC_URL || "http://localhost:8080";

/**
 * ALL RECIPES
 */
/**
 * Get all recipes
 * @returns list of all recipes
 */
export const getAllRecipes = async () => {
    let allRecipes: recipeInfo[] = [];
    await axios
    .get(`${DB_URL}/recipe`)
    .then((res) => {
        allRecipes = res.data.sort((a:recipeInfo, b:recipeInfo) => {
            let nameA = a.name.toLowerCase(),
                nameB = b.name.toLowerCase();
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
        });
    })
    .catch((error) => {
      console.log(error.response.data);
    });
    return allRecipes;
};

export const addRecipe = async (newRecipe: recipeName) => {
    await axios.post(`${DB_URL}/recipe`, newRecipe);
};

export const requestReview = async (recipeRequestReview: reviewRequest) => {
    await axios.post(`${DB_URL}/recipe/requestReview`, recipeRequestReview);
}