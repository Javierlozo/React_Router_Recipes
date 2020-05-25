import React, { useState, UseEffect, useEffect } from "react";
import { Router, Link } from "@reach/router";
import recipesDb from "./recipesDb";
import { Card } from "@material-ui/core";

const Home = () => {
  return <div>Home</div>;
};

const Recipes = (props) => {
  return <div>{props.children}</div>;
};

const RecipeIndex = (props) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    //Do a request to an API/ server/db. Async fn usually
    setRecipes(recipesDb);
  });
  return (
    <div>
      {recipes.map((recipe) => {
        return (
          <Card
            onClick={() => props.navigate(`/recipes/${recipe.id}`)}
            style={{ margin: 20, padding: 10 }}
          >
            <div>{recipe.food}</div>
            <img src={recipe.image} alt={"recipe"} width={200} />
            <div>{recipe.instructions}</div>
            <div>{recipe.id}</div>
          </Card>
        );
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
  return (
    <Card style={{ height: "70vh", margin: 20, padding: 10 }}>
      <div>{recipe.food}</div>
      <img src={recipe.image} alt={"recipe"} width={200} />
      <div>{recipe.instructions}</div>
      <div>{recipe.id}</div>
    </Card>
  );
};

const NotFound = () => {
  return <div>Sorry, there is no page at this location!</div>;
};

function App() {
  return (
    <div style={{ backgroundColor: "lightGrey", minHeight: "100vh" }}>
      <nav>
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
