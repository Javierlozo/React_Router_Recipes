import React, { useState, useEffect } from "react";
import recipesDb from "../recipesDb";
import RecipesListCard from "./RecipesListCard";

const RecipeIndex = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    //Do a request to an API/ server/db. Async fn usually
    setRecipes(recipesDb);
  });
  return (
    <div>
      {recipes.map((recipe) => {
        return <RecipesListCard recipe={recipe} />;
      })}
    </div>
  );
};
export default RecipeIndex;
