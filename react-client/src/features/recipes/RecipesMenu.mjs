import { Link } from 'react-router-dom'

const RecipesMenu = () => {
    return (
        <section>
            <h1>Recipes Menu</h1>

            <p className='recipesLink'><Link to="/dash/recipes/create_recipe">Create Recipe</Link></p>
        </section>
    )
}

export default RecipesMenu  