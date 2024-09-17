import { useEffect, useState } from "react"
import { MENU_API, MENU_IMG } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {
    const [restInfo, setRestInfo] = useState(null)
    const [menuData, setMenuData] = useState([]);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {

        const data = await fetch(MENU_API + resId)
        const json = await data.json();
        setRestInfo(json);
        setMenuData(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }

    if(restInfo === null ) return<Shimmer/>

    const {name, cuisines, costForTwoMessage} = restInfo?.data?.cards[2]?.card?.card?.info;

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
                menuData?.map((item)=>(
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

