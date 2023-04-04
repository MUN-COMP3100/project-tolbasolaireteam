
const WeeklyPlan = ({ meals, isLoading }) => {

    return (
        <>
            {isLoading ? (<p>Loading...</p> 
            ) : (
            <table className="mealPlan">
                <tbody>
                    <tr>
                        <th>Sunday</th>
                        <td className="mealPlan">
                            Name: {meals[0]?.name || "Empty"} <br/> 
                            Summary: {meals[0]?.summary || "Empty"} <br/>
                            URL: <a href={meals[0]?.url || ""} target="_blank" rel="noreferrer">{meals[0]?.url || "Empty"} </a>
                        </td>
                    </tr>
                    <tr>
                        <th>Monday</th>
                        <td className="mealPlan">
                            Name: {meals[1]?.name || "Empty"} <br/>
                            Summary: {meals[1]?.summary || "Empty"} <br/>
                            URL: <a href={meals[1]?.url || ""} target="_blank" rel="noreferrer">{meals[1]?.url || "Empty"} </a>
                        </td>
                    </tr>
                    <tr>
                        <th>Tuesday</th>
                        <td className="mealPlan">
                            Name: {meals[2]?.name || "Empty"} <br/>
                            Summary: {meals[2]?.summary || "Empty"} <br/>
                            URL: <a href={meals[2]?.url || ""} target="_blank" rel="noreferrer">{meals[2]?.url || "Empty"} </a>
                        </td>
                    </tr>
                    <tr>
                        <th>Wednesday</th>
                        <td className="mealPlan">
                            Name: {meals[3]?.name || "Empty"} <br/>
                            Summary: {meals[3]?.summary || "Empty"} <br/>
                            URL: <a href={meals[3]?.url || ""} target="_blank" rel="noreferrer">{meals[3]?.url || "Empty"} </a>
                        </td>
                    </tr>
                    <tr>
                        <th>Thursday</th>
                        <td className="mealPlan">
                            Name: {meals[4]?.name || "Empty"} <br/>
                            Summary: {meals[4]?.summary || "Empty"} <br/>
                            URL: <a href={meals[4]?.url || ""} target="_blank" rel="noreferrer">{meals[4]?.url || "Empty"} </a>
                        </td>
                    </tr>
                    <tr>
                        <th>Friday</th>
                        <td className="mealPlan">
                            Name: {meals[5]?.name || "Empty"} <br/>
                            Summary: {meals[5]?.summary || "Empty"} <br/>
                            URL: <a href={meals[5]?.url || ""} target="_blank" rel="noreferrer">{meals[5]?.url || "Empty"} </a>
                        </td>
                    </tr>
                    <tr>
                        <th>Saturday</th>
                        <td className="mealPlan">
                            Name: {meals[6]?.name || "Empty"} <br/>
                            Summary: {meals[6]?.summary || "Empty"} <br/>
                            URL: <a href={meals[6]?.url || ""} target="_blank" rel="noreferrer">{meals[6]?.url || "Empty"} </a>
                        </td>
                    </tr>
                </tbody>
            </table>
            )}
        </>
    )
}

export default WeeklyPlan