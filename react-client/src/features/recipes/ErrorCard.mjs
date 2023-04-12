import './RecipeCard.css';

const ErrorCard = ({ recipeName }) => {

    return (
        <div className="recipeCard">
            <h2>Could not find recipe</h2>
            <p>Sorry we could not find any matching recipes!</p>
        </div>
        )
}

export default ErrorCard;