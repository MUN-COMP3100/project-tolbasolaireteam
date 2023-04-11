import { Link } from "react-router-dom";

const Public = () => {
    
    return (
        <section className="public">
            <header className="publicItem">
                <h1> Welcome to the <span> Ultimate Meal Planner! </span></h1>
                <p> <Link to="/login"> Login </Link> or <Link to="/register"> Register </Link> to get started! </p>
            </header>
            <main className="publicItem">
                <p> This is a meal planner that allows you to plan your meals for the week. </p>
                <p> You can add recipes, add ingredients to your pantry, and plan your meals for the week. </p>
                <p> You can also view your meal plan for the week and see what ingredients you need to buy. </p>
                <p> You can also view your pantry and see what ingredients you have. </p>
                <p> You can also view your recipes and see what ingredients you need to buy. </p>
                
            </main>
            <footer className="publicItem">
                <p> &copy; Copyright 2023</p>
            </footer>
            
        </section>
    )
}

export default Public