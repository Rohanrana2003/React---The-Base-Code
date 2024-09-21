import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from '../utils/CustomHooks/useRestaurant';
import useOnlineStatus from "../utils/CustomHooks/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(0);
    const {resId} = useParams();
    const restInfo = useRestaurantMenu(resId);
    const onlineStatus = useOnlineStatus();

    if(restInfo === null ) return<Shimmer/>

    const {name, cuisines, costForTwoMessage} = restInfo?.cards[2]?.card?.card?.info;

    const categories = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        (c)=> c.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')


    if (onlineStatus === false) {
        return <div className="online-status">
                    <h1>Looks like you don't have an active <span>Internet connection</span></h1>
                </div>
    }

    return(
        <div className="restaurant-menu">

            <div className="rest-details">

                <h1 className="rest-name">{name}</h1>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{costForTwoMessage}</h4>

            </div>
             
            <h2 id="menu">Menu</h2>

            
            <div className="categories" >
                {categories?.map((category, index)=> 
                    <RestaurantCategory 
                        key={category?.card?.card.title}
                        data={category?.card?.card}
                        showItems={index === showIndex? true:false}
                        setShowIndex = {()=>setShowIndex(index)}
                    />
                )}
            </div>

        </div>
    )
}

export default RestaurantMenu

