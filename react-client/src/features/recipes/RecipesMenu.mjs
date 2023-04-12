import { Link } from 'react-router-dom'

const RecipesMenu = () => {
    return (
        <section>
            <h1>Recipes Menu</h1>

            <p className='recipesLink'><Link to="/dash/recipes/create_recipe">Create Recipe</Link></p>
            <p className='recipesLink'><Link to="/dash/recipes/amend_recipe">Amend Recipe</Link></p>
            <p className='recipesLink'><Link to="/dash/recipes/search">Search For Recipe by Name</Link></p>
            <p className='recipesLink'><Link to="/dash/recipes/search_ingredient">Search For Recipe by Ingredient</Link></p>
        </section>
    )
}

export default RecipesMenu  