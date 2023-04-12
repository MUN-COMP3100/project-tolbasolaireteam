import { useRef, useState, useEffect } from "react";
import useAxiosPrivate from '../../hooks/useAxiosPrivate.mjs';
import RecipeCard from './RecipeCard.mjs';
import ErrorCard from './ErrorCard.mjs';

const SearchRecipe = () => {
    const recipeNameRef = useRef();
    const msgRef = useRef();

    const [recipeToFind, setRecipeToFind] = useState('');

    const [recipeName, setRecipeName] = useState('');
    const [recipeSummary, setRecipeSummary] = useState('');
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeDirections, setRecipeDirections] = useState('');
    const [recipeURL, setRecipeURL] = useState('');
    const [recipeCategory, setRecipeCategory] = useState('');
    const [recipeAuthor, setRecipeAuthor] = useState('');
    const [recipeTotal, setRecipeTotalTime] = useState('');
    const [recipeServings, setRecipeServings] = useState('');
    
    const [recipeError, setRecipeError] = useState(false);

    const [msg, setMsg] = useState('');

    const privateAxiosInstance = useAxiosPrivate();

    const clearRecipeState = () => {
        setRecipeName('');
        setRecipeSummary('');
        setRecipeIngredients('');
        setRecipeDirections('');
        setRecipeURL('');
        setRecipeCategory('');
        setRecipeAuthor('');
        setRecipeTotalTime('');
        setRecipeServings('');
        setRecipeError(false);
    }

    const setRecipeState = (response) => {
        setRecipeSummary(response.data.summary);
        setRecipeIngredients(response.data.ingredients);
        setRecipeDirections(response.data.directions);
        setRecipeCategory(response.data.category);
        setRecipeName(response.data.name);
        setRecipeAuthor(response.data.author);
        setRecipeTotalTime(response.data.total);
        setRecipeServings(response.data.servings);
        setRecipeURL(response.data.url);
    }

    const handleFindSubmit = async (e) => {
        e.preventDefault();
        clearRecipeState();
        try {
            const response = await privateAxiosInstance.get(`/recipes/?name=${recipeToFind}`);
            if (response.data) 
            {
                setRecipeState(response);
            }
            else
            {
                setRecipeError(true);
                console.log('Sorry, we could not find a recipe with that name.');
            }

        } 
        catch (err) 
        {
            console.log(err);
            setMsg(err.response.message);
        }
    }

    useEffect(() => {
        recipeNameRef.current.focus();
    }, []);

    return (  
        <section className="searchRecipe"> 
            <h1>Find a Recipe by Name</h1>
            
            <form onSubmit={handleFindSubmit} className="searchRecipeForm">
                <label htmlFor="recipeToFind">Recipe Name: </label>
                <input 
                    type="text" 
                    ref = {recipeNameRef}
                    id="recipeToFind" 
                    name="recipeToFind" 
                    value={recipeToFind} 
                    onChange={(e) => setRecipeToFind(e.target.value)} 
                    required
                />
                <button type="submit">Find Recipe</button>
            </form>
            {recipeName && !recipeError && <RecipeCard 
            recipeSummary={recipeSummary}
            recipeName={recipeName} 
            recipeAuthor={recipeAuthor} 
            recipeTotal={recipeTotal} 
            recipeServings={recipeServings} 
            recipeURL={recipeURL} 
            />}

            {recipeError && <ErrorCard recipeName={recipeName} />} 

        </section>
    ) 
}

export default SearchRecipe  