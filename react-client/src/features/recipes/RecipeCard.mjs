import './RecipeCard.css';

const RecipeCard = ({ recipeSummary, recipeName, recipeAuthor, recipeTotal, recipeServings, recipeURL }) => {

    return (
        <div className="recipeCard">
            <h2>{recipeName}</h2>
            <hr/>
            <p>Author: {recipeAuthor}</p>
            <p>Total Time: {recipeTotal}</p>
            <p>Servings: {recipeServings}</p>
            <p>Summary: {recipeSummary}</p>

            <a href={recipeURL} target="_blank" rel="noreferrer">
                <button>Link</button>
            </a>
        </div>
        )
}

export default RecipeCard;