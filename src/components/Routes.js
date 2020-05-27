import React from "react";
import { Router } from "@reach/router";
import Home from "../components/Home";
import RecipeIndex from "../components/RecipeIndex";
import Recipe from "../components/Recipe";
import Recipes from "../components/Recipes";
import NotFound from "../components/NotFound";

const Routes = () => {
  return (
    <Router>
      <Home path="/" />
      <Recipes path="recipes">
        <Recipe path=":recipeId" />
        <RecipeIndex path="/" />
      </Recipes>
      <NotFound default />
    </Router>
  );
};

export default Routes;
