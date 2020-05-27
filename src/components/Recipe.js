import React, { useState, useEffect } from "react";
import recipesDb from "../recipesDb";
import { Link } from "@reach/router";
import IndividualRecipeCard from "./IndividualRecipeCard";

const Recipe = (props) => {
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    //Would be an async api call
    setRecipe(recipesDb.find((recipe) => recipe.id === Number(props.recipeId)));
  }, []);

  if (!recipe) {
    return (
      <div>
        Sorry, no recipe matches the id {props.recipeId}!.<br></br>
        Have you searched for your recipe on our{" "}
        <Link to="/recipes">recipes page?</Link>
      </div>
    );
  }

  return <IndividualRecipeCard recipe={recipe} />;
};

export default Recipe;
