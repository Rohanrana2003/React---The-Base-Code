import { MENU_IMG } from "../utils/constants";

const ItemList = ({item}) =>{


    return (
        <div className="menu-items">
            {
                item?.map((item)=>(
                    <div key={item.card?.info?.id} className="food-items">

                        <div className="food-detail">
                            <div  id="heading">{item.card?.info?.name} <span className="food-price">{item.card?.info?.price ? " ₹"+item.card?.info?.price/100 : " ₹" + item.card?.info?.defaultPrice/100}</span></div>
                            <p>{item.card?.info?.description}</p>
                        </div>
                        
                        <img src={MENU_IMG + item.card?.info?.imageId} alt="" />

                    </div>
                ))
            }
        </div>
    )
}

export default ItemList;