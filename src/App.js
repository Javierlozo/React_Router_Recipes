import React, { useState, UseEffect, useEffect } from "react";
import { Router, Link, navigate } from "@reach/router";
import recipesDb from "./recipesDb";
import { Card } from "@material-ui/core";

const Home = () => {
  return <div>Home</div>;
};

const Recipes = (props) => {
  return <div>{props.children}</div>;
};

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

const Recipe = (props) => {
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    //Would be an async api call
    setRecipe(recipesDb.find((recipe) => recipe.id === Number(props.recipeId)));
  }, []);
  return <IndividualRecipeCard recipe={recipe} />;
};

const RecipesListCard = (props) => {
  return (
    <Card
      onClick={() => navigate(`/recipes/${props.recipe.id}`)}
      style={{ margin: 20, padding: 10 }}
    >
      <div>{props.recipe.food}</div>
      <img src={props.recipe.image} alt={"recipe"} width={200} />
      <div>{props.recipe.instructions}</div>
      <div>{props.recipe.id}</div>
    </Card>
  );
};

const IndividualRecipeCard = (props) => {
  return (
    <Card
      onClick={() => navigate(`/recipes/${props.recipe.id}`)}
      style={{ margin: 20, padding: 10 }}
    >
      <div>{props.recipe.food}</div>
      <img src={props.recipe.image} alt={"recipe"} width={200} />
      <div>{props.recipe.instructions}</div>
      <div>{props.recipe.id}</div>
    </Card>
  );
};

const NotFound = () => {
  return <div>Sorry, there is no page at this location!</div>;
};

function App() {
  return (
    <div style={{ backgroundColor: "lightGrey", minHeight: "100vh" }}>
      <nav style={{ backgroundColor: "grey", minHeight: "5vh" }}>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
      </nav>
      <Router>
        <Home path="/" />
        <Recipes path="recipes">
          <Recipe path=":recipeId" />
          <RecipeIndex path="/" />
        </Recipes>
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
