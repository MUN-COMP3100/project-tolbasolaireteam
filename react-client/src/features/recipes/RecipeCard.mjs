import React from 'react';
import './RecipeCard.css';
const RecipeCard = ({ recipeName, recipeAuthor, recipeTotal, recipeServings, recipeURL }) => (
  <div className="recipeCard">
    <h2>{recipeName}</h2>
    <hr/>
    <p>Author: {recipeAuthor}</p>
    <p>Total Time: {recipeTotal}</p>
    <p>Servings: {recipeServings}</p>

    <a href={recipeURL} target="_blank">
      <button>Link</button>
    </a>

  </div>
);

export default RecipeCard;