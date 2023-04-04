import { Link } from "react-router-dom";

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1> Welcome to the <span className="nowrap"> Ultimate Meal Planner! </span></h1>
                <p> <Link to="/login"> Login </Link> or <Link to="/register"> Register </Link> to get started! </p>
            </header>
            <main className="public-main">
                <p> This is a meal planner that allows you to plan your meals for the week. </p>
                <p> You can add recipes, add ingredients to your pantry, and plan your meals for the week. </p>
                <p> You can also view your meal plan for the week and see what ingredients you need to buy. </p>
                <p> You can also view your pantry and see what ingredients you have. </p>
                <p> You can also view your recipes and see what ingredients you need to buy. </p>
            </main>
            <footer>
                <p> &copy; Copyright 2023</p>
            </footer>
        </section>

    )
    return content
}

export default Public