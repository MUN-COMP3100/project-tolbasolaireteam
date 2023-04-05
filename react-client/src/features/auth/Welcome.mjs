import { Link } from 'react-router-dom'

const Welcome = () => {

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full',
    timeStyle: 'long'}).format(date)

    return (
        <section className="welcome">

            <p>{today}</p>

            <h1>Welcome!</h1>

            <p>Thank you for registering with the Ultimate Meal Planner!</p>
            <p><Link to="/dash/recipes">View Recipes</Link></p>
            <p><Link to="/dash/meal_planner">View Planner</Link></p>

        </section>
    )
}

export default Welcome