import { useEffect } from "react"
import ItemList from "./ItemList.mjs";

const GroceryList = ({ groceryListItems }) => {

    useEffect(() => {
        localStorage.setItem("groceryList", JSON.stringify(groceryListItems));
    }, [groceryListItems]);

    return (
        <section className="groceryList">
            <h2>Grocery List</h2>
            {groceryListItems.length? (
                <ItemList groceryListItems={groceryListItems} />
            ) : (
                <p>There are no items in your grocery list.</p>
            )}
        </section>
    )
}

export default GroceryList