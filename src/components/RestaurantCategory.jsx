import ItemList from "./ItemList";
import { useState } from "react";


const RestaurantCategory = ({ data }) => {
    const [showItems, setShowItems] = useState(false)

    return (

        <div className="category-all">

            <div className="category-title" onClick={()=>setShowItems(!showItems)}>
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