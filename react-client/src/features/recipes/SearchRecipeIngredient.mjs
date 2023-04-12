import { useRef, useState, useEffect } from "react";
import useAxiosPrivate from '../../hooks/useAxiosPrivate.mjs';
import RecipeCard from './RecipeCard.mjs';
import ErrorCard from './ErrorCard.mjs';

const SearchRecipeIngredient = () => {
  const recipeSearchIngredients = useRef();
  const msgRef = useRef();

  const [recipeToFind, setRecipeToFind] = useState('');

  const [recipes, setRecipes] = useState([]);
  const [recipeError, setRecipeError] = useState(false);

  const [msg, setMsg] = useState('');

  const privateAxiosInstance = useAxiosPrivate();

  const clearRecipeState = () => {
    setRecipes([]);
    setRecipeError(false);
  }

  const setRecipeState = (response) => {
    setRecipes(response.data);
  }

  const getSearchString = (searchString) => {
    const ingredients = searchString.split(",");
    let path = '/recipes/findByIngredients?';

    for (let i = 0; i < ingredients.length; i++) {
      const ingredient = ingredients[i];
      path += `ingredients=${ingredient}`;
      if (i !== ingredients.length - 1) {
        path += "&";
      }
    }
    return path;
  }

  const handleFindSubmit = async (e) => {
    e.preventDefault();
    clearRecipeState();
    try {
        const path = getSearchString(recipeToFind); // recipeToFind is the search contents
        const response = await privateAxiosInstance.get(path);

      if (response.data) {
        setRecipeState(response);
      } else {
        setRecipeError(true);
        console.log('Sorry, we could not find a recipe with that name.');
      }

    } catch (err) {
      console.log(err);
      //setMsg(err.response.message);
    }
  }

  useEffect(() => {
    recipeSearchIngredients.current.focus();
  }, []);

  return (
    <section className="searchRecipe">
      <h1>Find a Recipe by Ingredients</h1>

      <form onSubmit={handleFindSubmit} className="searchRecipeForm">
        <label htmlFor="recipeToFind">Please enter ingredients (comma separated): </label>
        <input
          type="text"
          ref={recipeSearchIngredients}
          id="recipeToFind"
          name="recipeToFind"
          value={recipeToFind}
          onChange={(e) => setRecipeToFind(e.target.value)}
          required
        />
        <button type="submit">Find Recipe</button>
      </form>
      {recipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          recipeSummary={recipe.summary}
          recipeName={recipe.name}
          recipeAuthor={recipe.author}
          recipeTotal={recipe.total}
          recipeServings={recipe.servings}
          recipeURL={recipe.url}
        />
      ))}

      {recipeError && <ErrorCard recipeName={recipeToFind} />}

    </section>
  )
}

export default SearchRecipeIngredient