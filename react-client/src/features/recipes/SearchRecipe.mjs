import { useRef, useState, useEffect } from "react";
import useAxiosPrivate from '../../hooks/useAxiosPrivate.mjs';

const SearchRecipe = () => {
    const recipeNameRef = useRef();
    const msgRef = useRef();

    const [recipeName, setRecipeName] = useState('');
    const [recipeSummary, setRecipeSummary] = useState('');
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeDirections, setRecipeDirections] = useState('');
    const [msg, setMsg] = useState('');
    const privateAxiosInstance = useAxiosPrivate();

    const clearFields = () => {
        setRecipeName('');
        setRecipeSummary('');
        setRecipeIngredients('');
        setRecipeDirections('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await privateAxiosInstance.get('/recipes',
            {
                params: {
                    name: recipeName
                }
            });
            console.log(response);
            //setMsg(response.data.name);
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
        }, 12000);
    }, [recipeName, recipeSummary, recipeIngredients, recipeDirections]);


    return (
        <section className="searchRecipe">
            <h1>Search for Recipe</h1>
            <form className="searchRecipeForm" onSubmit={handleSubmit}>
                <label htmlFor="recipeName">Recipe Name</label>
                <input 
                    type="text" 
                    id="recipeName"
                    ref={recipeNameRef}
                    required
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                />
                <button 
                    type="submit"
                    className="createRecipeButton"
                    disabled={!recipeName}
                >
                    Search
                </button>
            </form>
            <p ref={msgRef} className={msg ? "errmsg" : "offscreen"} aria-live="assertive">{msg}</p>
        </section>
    )
}

export default SearchRecipe