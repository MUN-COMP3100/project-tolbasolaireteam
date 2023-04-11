import { useRef, useState, useEffect } from "react";
import useAxiosPrivate from '../../hooks/useAxiosPrivate.mjs';

const AmendRecipe = () => {
    const recipeNameRef = useRef();
    const msgRef = useRef();
    const findMsgRef = useRef();

    const [recipeToFind, setRecipeToFind] = useState('');

    const [recipeName, setRecipeName] = useState('');
    const [recipeSummary, setRecipeSummary] = useState('');
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeDirections, setRecipeDirections] = useState('');
    const [recipeURL, setRecipeURL] = useState('');
    const [recipeCategory, setRecipeCategory] = useState('');
    const [recipeAuthor, setRecipeAuthor] = useState('');

    const [msg, setMsg] = useState('');
    const [findMsg, setFindMsg] = useState('');

    const privateAxiosInstance = useAxiosPrivate();

    const handleFindSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await privateAxiosInstance.get(`/recipes/?name=${recipeToFind}`);
            if (response.status === 204) {
                setFindMsg("No recipe found with that name.");
                return;
            }
            setRecipeName(response.data.name);
            setRecipeSummary(response.data.summary);
            setRecipeIngredients(response.data.ingredients);
            setRecipeDirections(response.data.directions);
            setRecipeURL(response.data.url);
            setRecipeCategory(response.data.category);
            setRecipeAuthor(response.data.author);
        } catch (err) {
            console.log(err);
            setFindMsg(err.response.message);
        }
    }
    
    const handleAmendSubmit = async (e) => {
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
            const response = await privateAxiosInstance.put('/recipes', recipe);
            setMsg(response.data.message);
            clearFields();
        } catch (err) {
            console.log(err);
            setMsg(err.response.message);
        }
    }

    const clearFields = () => {
        setRecipeToFind('');
        setRecipeName('');
        setRecipeSummary('');
        setRecipeIngredients('');
        setRecipeDirections('');
        setRecipeURL('');
        setRecipeCategory('');
        setRecipeAuthor('');
    }

    useEffect(() => {
        recipeNameRef.current.focus();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setMsg('');
            }, 20000);
    }, [recipeName, recipeSummary, recipeIngredients, recipeDirections]);

    useEffect(() => {
        setFindMsg('');
    }, [recipeToFind]);

    return (  
        <section className="amendRecipe"> 
            <h1>Amend a Recipe</h1>
            <hr/>
            <h2>Find the Recipe to Amend</h2>
            <form onSubmit={handleFindSubmit} className="amendRecipeForm">
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
                <p ref={findMsgRef} className={findMsg ? "errmsg" : "offscreen"} aria-live="assertive">{findMsg}</p>
            </form>
            <hr/>
            <h2>Amend the Recipe</h2>
            <form onSubmit={handleAmendSubmit} className="amendRecipeForm">
                <label htmlFor="recipeName">Recipe Name</label>
                <input
                    type="text"
                    id="recipeName"
                    name="recipeName"
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                    required
                />
                <label htmlFor="recipeSummary">Recipe Summary</label>
                <textarea
                    id="recipeSummary"
                    name="recipeSummary"
                    value={recipeSummary}
                    onChange={(e) => setRecipeSummary(e.target.value)}
                    required
                />
                <label htmlFor="recipeIngredients">Recipe Ingredients</label>
                <textarea
                    id="recipeIngredients"
                    name="recipeIngredients"
                    value={recipeIngredients}
                    onChange={(e) => setRecipeIngredients(e.target.value)}
                    required
                />
                <label htmlFor="recipeDirections">Recipe Directions</label>
                <textarea
                    id="recipeDirections"
                    name="recipeDirections"
                    value={recipeDirections}
                    onChange={(e) => setRecipeDirections(e.target.value)}
                    required
                />
                <label htmlFor="recipeURL">Recipe URL</label>
                <input
                    type="text"
                    id="recipeURL"
                    name="recipeURL"
                    value={recipeURL}
                    onChange={(e) => setRecipeURL(e.target.value)}
                />
                <label htmlFor="recipeCategory">Recipe Category</label>
                <input
                    type="text"
                    id="recipeCategory"
                    name="recipeCategory"
                    value={recipeCategory}
                    onChange={(e) => setRecipeCategory(e.target.value)}
                />
                <label htmlFor="recipeAuthor">Recipe Author</label>
                <input
                    type="text"
                    id="recipeAuthor"
                    name="recipeAuthor"
                    value={recipeAuthor}
                    onChange={(e) => setRecipeAuthor(e.target.value)}
                />
                <button type="submit">Amend Recipe</button>
            </form>
            <p ref={msgRef} className={msg ? "errmsg" : "offscreen"} aria-live="assertive">{msg}</p>
        </section>
    ) 
}

export default AmendRecipe  