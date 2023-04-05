import LineItem from "./LineItem.mjs"

const ItemList = ({ groceryListItems }) => {

    
    return (
        <ul className="itemList">
            {groceryListItems.map((item) => (
                <LineItem key={item.id} item={item} />
            ))}
        </ul>
    )
}

export default ItemList