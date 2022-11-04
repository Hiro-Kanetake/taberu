import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Header from "./components/Header";
import "./App.css";
import "./components/form.css";
import { recipeName, recipeInfo, reviewRequest } from "./type";
import { getAllRecipes, addRecipe, requestReview } from "./api";

const OwnerRecipe: React.FC = () => {
  const [allRecipes, setAllRecipes] = useState<recipeInfo[] >([]);
  const [newRecipe, setNewRecipe] = useState<{ name: string }>();
  const [reviewRecipeId, setReviewRecipeId] = useState<number | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllRecipes();
      setAllRecipes(data);
    };
    fetchData();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<recipeName>({
    defaultValues: {
      name: "",
    },
  });

  const newRecipeInfo = { name: "" };
  const onSubmit = (data: recipeName) => {
    newRecipeInfo.name = data.name;
    setNewRecipe(newRecipeInfo);
  };

  useEffect(() => {
    if (newRecipe) addRecipe(newRecipe);
  }, [newRecipe]);

  useEffect(() => {
    const recipeRequestReview: reviewRequest = {
      account_id: Number(localStorage.getItem("account_id")),
      recipe_id: reviewRecipeId,
      review_request: true,
    };
    if (reviewRecipeId) requestReview(recipeRequestReview);
  }, [reviewRecipeId]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="OwnerRecipe">
        <div className="formArea_owRecipe">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="recipename">
              Recipe Name <span>*</span>
            </label>
            <input
              type="text"
              id="recipename"
              placeholder="Please put the recipe name"
              {...register("name", { required: "this is required" })}
            />
            <button>Add</button>
          </form>
        </div>
        <div className="textArea_owRecipe">
          <h2>All Recipes</h2>
        </div>

        <div className="reviewArea_owRecipe">
          {allRecipes.reverse().map((recipe) => {
            return (
              <div key={recipe.id} className="reviewAreaIn_owRecipe">
                <p>{recipe.name}</p>
                <label>
                  {" "}
                  <button
                    type="submit"
                    value={recipe.id}
                    onClick={(e) => {
                      e.preventDefault();
                      setReviewRecipeId(recipe.id);
                    }}
                  >
                    Request Review
                  </button>
                </label>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default OwnerRecipe;
