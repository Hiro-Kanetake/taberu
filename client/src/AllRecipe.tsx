import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Header from "./components/Header";
import "./App.css";
import "./components/form.css";
import { recipeName } from "./type";
import dummy from "./assets/dummy.png";

const DB_URL = process.env.REACT_APP_PUBLIC_URL || "http://localhost:8080";

const OwnerRecipe: React.FC = () => {
  const [allRecipes, setAllRecipes] = useState<
    { id: number; name: string; review: number | undefined }[]
  >([]);
  const [newRecipe, setNewRecipe] = useState<{ name: string }>();
  const [reviewRecipeId, setReviewRecipeId] = useState<number | undefined>();

  useEffect(() => {
    axios
      .get(`${DB_URL}/recipe`)
      .then((res) => {
        if (res.data.length > allRecipes.length) {
          let lastIndex = allRecipes.length;
          setAllRecipes((prevRecipe) => [...prevRecipe, res.data[lastIndex]]);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [allRecipes]);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<recipeName>({
    defaultValues: {
      name: "",
    },
  });

  const newRecipeInfo = { name: "" };
  const onSubmit = (data: any) => {
    newRecipeInfo.name = data.name;
    setNewRecipe(newRecipeInfo);
  };

  useEffect(() => {
    if (newRecipe) axios.post(`${DB_URL}/recipe`, newRecipe)
  }, [newRecipe]);

  const recipeRequestReview = {
    account_id: Number(localStorage.getItem("account_id")),
    recipe_id: reviewRecipeId,
    review_request: true,
  };
  useEffect(() => {
    if (reviewRecipeId) {
      axios.post(`${DB_URL}/recipe/requestReview`, recipeRequestReview);
    }
  }, [reviewRecipeId]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="OwnerRecipe">
        {/* <img src={dummy} alt="" /> */}
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
