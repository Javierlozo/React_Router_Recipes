import React from "react";
import { Router, Link } from "@reach/router";

const Home = () => {
  return <div>Home</div>;
};

const Recipes = (props) => {
  return <div>{props.children}</div>;
};

const RecipeIndex = () => {
  return <div>RecipeIndex</div>;
};

const Recipe = (props) => {
  return <div>Recipe {props.recipeId}</div>;
};

const NotFound = () => {
  return <div>NotFound</div>;
};

function App() {
  return (
    <div>
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
