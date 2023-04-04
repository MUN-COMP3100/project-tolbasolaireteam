import { useState, useEffect } from 'react';
import MealOptions from "./MealOptions.mjs"
import WeeklyPlan from "./WeeklyPlan.mjs"
import useAxiosPrivate from '../../hooks/useAxiosPrivate.mjs';

const MealPlanner = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [values, setValues] = useState({ numBeef: '0', numPork: '0', numChicken: '0' });
    const [meals, setMeals] = useState(JSON.parse(localStorage.getItem("meals")) || []);
    const instance = useAxiosPrivate();

    useEffect(() => {
        localStorage.setItem("meals", JSON.stringify(meals));
    }, [meals]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        let numOfBeef = values.numBeef;
        let numOfPork = values.numPork;
        let numOfChicken = values.numChicken;
        try {
            const result = await instance.get(`/recipes/randomGenerator/?beef=${numOfBeef}&pork=${numOfPork}&chicken=${numOfChicken}`);
            setIsLoading(false);
            setMeals(result.data);
        } catch (error) {
            console.log(`Error: ${error})`);
        }
        
    };

    const handleClear = () => {
        setMeals([]);
    }

    return (
        <>
            <MealOptions
                values={values}
                setValues={setValues}
                handleSubmit={handleSubmit}
            />
            <button onClick={handleClear}>Clear Meals</button>
            <WeeklyPlan 
                meals={meals}
                isLoading={isLoading}
            />
        </>
    )
}

export default MealPlanner  