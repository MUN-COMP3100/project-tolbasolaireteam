import { useRef, useState, useEffect } from "react";
import useAxiosPrivate from '../../hooks/useAxiosPrivate.mjs';
import RecipeCard from './RecipeCard.mjs';

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

    const [msg, setMsg] = useState('');

    const privateAxiosInstance = useAxiosPrivate();

    const handleFindSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(recipeToFind);
            const response = await privateAxiosInstance.get(`/recipes/?name=${recipeToFind}`);
            console.log(response.data);

            setRecipeSummary(response.data.summary);
            setRecipeIngredients(response.data.ingredients);
            setRecipeDirections(response.data.directions);
            setRecipeCategory(response.data.category);

            setRecipeName(response.data.name);
            setRecipeAuthor(response.data.author);
            setRecipeTotalTime(response.data.total);
            setRecipeServings(response.data.servings);
            setRecipeURL(response.data.url);

        } catch (err) {
            console.log(err);
            setMsg(err.response.message);
        }
    }

    useEffect(() => {
        recipeNameRef.current.focus();
    }, []);

    return (  
        <section className="searchRecipe"> 
            <h1>Find a Recipe</h1>
            
            <form onSubmit={handleFindSubmit} className="searchRecipeForm">
                <label htmlFor="recipeToFind">Recipe Name</label>
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
            {recipeName && <RecipeCard 
            recipeName={recipeName} 
            recipeAuthor={recipeAuthor} 
            recipeTotal={recipeTotal} 
            recipeServings={recipeServings} 
            recipeURL={recipeURL} 
            />}
        </section>
    ) 
}

export default SearchRecipe  