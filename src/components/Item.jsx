const Item = ({ item,onDelete }) => {

    // Render a single item
    // Add a Delete and Edit button
    // return null;
    return(
        <div>
            <p>{item.name}</p>
            <button onClick={()=>onDelete(item.id)}>Delete</button>            
        </div>
    )
};

export default Item;
