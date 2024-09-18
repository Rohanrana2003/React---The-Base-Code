import { MENU_IMG } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from '../utils/hooks/useRestaurant';
import useOnlineStatus from "../utils/hooks/useOnlineStatus";


const RestaurantMenu = () => {

    const {resId} = useParams();
    const restInfo = useRestaurantMenu(resId);
    const onlineStatus = useOnlineStatus();

    if(restInfo === null ) return<Shimmer/>

    const {name, cuisines, costForTwoMessage} = restInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

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

            <div className="menu-items">
            {
                itemCards?.map((item)=>(
                    <div key={item.card?.info?.id} className="food-items">

                        <li >
                            {item.card?.info?.name} <p className="food-price">{item.card?.info?.price ? " - RS."+item.card?.info?.price/100 : ""}</p>
                        </li>

                            <img src={MENU_IMG + item.card?.info?.imageId} alt="" />
                    </div>
                ))
            }
            </div>

        </div>
    )
}

export default RestaurantMenu

