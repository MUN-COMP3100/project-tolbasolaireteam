import { useState, useEffect } from 'react';
import MealOptions from "./MealOptions.mjs"
import WeeklyPlan from "./WeeklyPlan.mjs"
import GroceryList from "../grocery-list/GroceryList.mjs"
import useAxiosPrivate from '../../hooks/useAxiosPrivate.mjs';

const MealPlanner = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [values, setValues] = useState({ numBeef: '0', numPork: '0', numChicken: '0' });
    const [meals, setMeals] = useState(JSON.parse(localStorage.getItem("meals")) || []);
    const instance = useAxiosPrivate();
    const [groceryListItems, setGroceryListItems] = useState(JSON.parse(localStorage.getItem("groceryList")) || [])

    const addItems = (ingredients) => {
        let count = 0;
        // map through the ingredients array and create an object for each ingredient
        let items = ingredients.map(ingredient => {
            return {
                id: count++,
                name: ingredient
            }
        });
        setGroceryListItems(items);
    }

    // iterate through each meal and split the ingredients which are delimited by ; into an array
    const getIngredients = (meals) => {
        let ingredients = [];
        meals.forEach(meal => {
            ingredients.push(meal.ingredients.split(";"));
        });
        //flatten the array
        ingredients = ingredients.flat();
        return ingredients;
    }
    
    

    useEffect(() => {
        localStorage.setItem("meals", JSON.stringify(meals));
        addItems(getIngredients(meals));
    }, [meals]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        let numOfBeef = values.numBeef;
        let numOfPork = values.numPork;
        let numOfChicken = values.numChicken;
        try {
            const result = await instance.get(`/recipes/randomGenerator/?beef=${numOfBeef}&pork=${numOfPork}&chicken=${numOfChicken}`);
            setMeals(result.data);
        } catch (error) {
            console.log(`Error: ${error})`);
        } finally {
            setIsLoading(false);
        }
        
    };

    const handleClear = () => {
        setMeals([]);
    }

    return (
        <section className='mealPlanner'>
            <MealOptions
                values={values}
                setValues={setValues}
                handleSubmit={handleSubmit}
            />
            <button className="clearMeals" onClick={handleClear}>Clear Meals</button>
            <WeeklyPlan 
                meals={meals}
                isLoading={isLoading}
            />
            <GroceryList
                groceryListItems={groceryListItems}
            />
        </section>
    )
}

export default MealPlanner  