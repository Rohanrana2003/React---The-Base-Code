import { useDispatch } from "react-redux";
import { MENU_IMG } from "../utils/constants";
import { addItem } from "../utils/ReduxStore/cartSlice";

const ItemList = ({ item }) => {
    const dispatch = useDispatch()

    const handleAddItems = (item) =>{

        dispatch(
            addItem(item)
        )
    }
    
    return (
        <div className="menu-items" >
            {
                item?.map((item) => (
                    <div key={item.card?.info?.id} className="food-items" data-testid='menuItem'>

                        <div className="food-detail">
                            <div id="heading">{item.card?.info?.name} <span className="food-price">{item.card?.info?.price ? " ₹" + item.card?.info?.price / 100 : " ₹" + item.card?.info?.defaultPrice / 100}</span></div>
                            <p>{item.card?.info?.description}</p>
                        </div>

                        <div className="food-img">

                            <img src={MENU_IMG + item.card?.info?.imageId} alt="food img" />
                            <button className="add-button" onClick={()=>handleAddItems(item)}>ADD +</button>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default ItemList;