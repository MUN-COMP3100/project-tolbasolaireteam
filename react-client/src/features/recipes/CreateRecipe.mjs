import { useRef, useState, useEffect } from "react";
import useAxiosPrivate from '../../hooks/useAxiosPrivate.mjs';

const CreateRecipe = () => {
    const recipeNameRef = useRef();
    const msgRef = useRef();

    const [recipeName, setRecipeName] = useState('');
    const [recipeSummary, setRecipeSummary] = useState('');
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeDirections, setRecipeDirections] = useState('');
    const [recipeURL, setRecipeURL] = useState('');
    const [recipeCategory, setRecipeCategory] = useState('');
    const [recipeAuthor, setRecipeAuthor] = useState('');

    const [msg, setMsg] = useState('');

    const privateAxiosInstance = useAxiosPrivate();

    const clearFields = () => {
        setRecipeName('');
        setRecipeSummary('');
        setRecipeIngredients('');
        setRecipeDirections('');
        setRecipeURL('');
        setRecipeCategory('');
        setRecipeAuthor('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const recipe = {
            name: recipeName,
            summary: recipeSummary,
            ingredients: recipeIngredients,
            directions: recipeDirections,
            url: recipeURL,
            category: recipeCategory,
            author: recipeAuthor
        }
        try {
            const response = await privateAxiosInstance.post('/recipes', recipe);
            setMsg(response.data.message);
            clearFields();
        } catch (err) {
            console.log(err);
            setMsg(err.response.message);
        } 
        
    }

    useEffect(() => {
        recipeNameRef.current.focus();
    }, []);

    useEffect(() => {
        setTimeout(() => {
        setMsg('');
        }, 20000);
    }, [recipeName, recipeSummary, recipeIngredients, recipeDirections]);


    return (
        <section className="createRecipe">
            <h1>Create a Recipe</h1>
            <form className="createRecipeForm" onSubmit={handleSubmit}>
                <label htmlFor="recipeName">Recipe Name</label>
                <input 
                    type="text" 
                    id="recipeName"
                    ref={recipeNameRef}
                    required
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                />
                <label htmlFor="recipeSummary">Recipe Summary</label>
                <textarea
                    id="recipeSummary" 
                    required 
                    value={recipeSummary}
                    onChange={(e) => setRecipeSummary(e.target.value)}
                />
                <label htmlFor="recipeIngredients">Recipe Ingredients</label>
                <textarea
                    id="recipeIngredients"
                    required
                    value={recipeIngredients}
                    onChange={(e) => setRecipeIngredients(e.target.value)}
                />
                <label htmlFor="recipeDirections">Recipe Directions</label>
                <textarea
                    id="recipeDirections"
                    required
                    value={recipeDirections}
                    onChange={(e) => setRecipeDirections(e.target.value)}
                />
                <label htmlFor="recipeURL">Recipe URL</label>
                <input
                    type="text"
                    id="recipeURL"
                    value={recipeURL}
                    onChange={(e) => setRecipeURL(e.target.value)}
                />
                <label htmlFor="recipeCategory">Recipe Category</label>
                <input
                    type="text"
                    id="recipeCategory"
                    value={recipeCategory}
                    onChange={(e) => setRecipeCategory(e.target.value)}
                />
                <label htmlFor="recipeAuthor">Recipe Author</label>
                <input
                    type="text"
                    id="recipeAuthor"
                    value={recipeAuthor}
                    onChange={(e) => setRecipeAuthor(e.target.value)}
                />
                <button 
                    type="submit"
                    className="createRecipeButton"
                    disabled={!recipeName || !recipeSummary || !recipeIngredients || !recipeDirections}
                >
                    Create Recipe
                </button>
            </form>
            <p ref={msgRef} className={msg ? "errmsg" : "offscreen"} aria-live="assertive">{msg}</p>
        </section>
    )
}

export default CreateRecipe