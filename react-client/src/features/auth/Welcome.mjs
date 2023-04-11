import { Link } from 'react-router-dom'

const Welcome = () => {

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full',
    timeStyle: 'long'}).format(date)

    return (
        <section className="welcome">

            <p className='welcomeItem-date'>{today}</p>

            <h1 className='welcomeItem-h'>Welcome!</h1>

            <p className='welcomeItem-p1'>Thank you for registering with the Ultimate Meal Planner!</p>
            <p className='welcomeItem-p2'><Link to="/dash/recipes">Recipes Menu</Link></p>
            <p className='welcomeItem-p3'><Link to="/dash/meal_planner">Random Meal Generator</Link></p>
            
        </section>
    )
}

export default Welcome