import { useState } from 'react';

const MealOptions = ({ values, setValues, handleSubmit}) => {
    
    const [ errorMsg, setErrorMsg] = useState('The total number of beef, pork and chicken dishes must equal seven.');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
        const sum = parseInt(values.numBeef) + parseInt(values.numPork) + parseInt(values.numChicken) + ( parseInt(value) - parseInt(values[name]));
        if (sum !== 7) {
            setErrorMsg('The total number of beef, pork and chicken dishes must equal seven.');
        } else {
            setErrorMsg('');
        }
    };

    return (
        <div className="mealOptions">
            <h1>Meal Options</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="num-of-beef">Number of beef dishes</label>
                <input type="number" className="spinner" name="numBeef" value={values.numBeef} min="0" max="7" onChange={handleChange}/>

                <label htmlFor="num-of-pork">Number of pork dishes</label>
                <input type="number" className="spinner" name="numPork" value={values.numPork} min="0" max="7" onChange={handleChange}/>

                <label htmlFor="num-of-chicken">Number of chicken dishes</label>
                <input type="number" className="spinner" name="numChicken" value={values.numChicken} min="0" max="7" onChange={handleChange}/>

                <button type="submit" className="generate_meal_plan_btn" disabled={!!errorMsg}> Generate Meal Plan</button>

                {errorMsg && <div>{errorMsg}</div>}
            </form>
        </div>
    )
}

export default MealOptions