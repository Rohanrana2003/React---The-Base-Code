import ItemList from "./ItemList";
import {useState} from 'react';

const RestaurantCategory = ({ data }) => {

    const [showIndex, setShowIndex] = useState(false);


    const handleItems = () =>{
        setShowIndex(!showIndex);
    }


    return (
        <div className="category-all">

            <div className="category-title" onClick={handleItems}>
                <span>{data.title}({data.itemCards.length})</span>
                {showIndex ? <span>⬇️</span>: <span>⬆️</span>}
            </div>

            {showIndex && <div className="category-body">
                <ItemList item={data.itemCards}/>
            </div>
            }

        </div>

    )
}

export default RestaurantCategory;