import React from "react";
import { Router } from "@reach/router";
import HomePage from "../pages/HomePage";
import RecipeIndex from "../components/RecipeIndex";
import Recipe from "../components/Recipe";
import RecipesPage from "../pages/RecipesPage";
import NotFound from "../components/NotFound";

const Routes = () => {
  return (
    <Router>
      <HomePage path="/" />
      <RecipesPage path="recipes">
        <Recipe path=":recipeId" />
        <RecipeIndex path="/" />
      </RecipesPage>
      <NotFound default />
    </Router>
  );
};

export default Routes;
