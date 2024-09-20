import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    const handleItems = () =>{
        setShowIndex();
    }


    return (
        <div className="category-all">

            <div className="category-title" onClick={handleItems}>
                <span>{data.title}({data.itemCards.length})</span>
                {showItems ? <span>⬇️</span>: <span>⬆️</span>}
            </div>

            {showItems && <div className="category-body">
                <ItemList item={data.itemCards}/>
            </div>
            }

        </div>

    )
}

export default RestaurantCategory;