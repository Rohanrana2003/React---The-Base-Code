import { useEffect, useState } from "react"
import { MENU_API } from "../utils/constants";
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
        <div>

            <h1>{name}</h1>
            <h4>{cuisines.join(', ')}   *{costForTwoMessage}</h4>
            
            <h2>Menu</h2>

            {
                menuData?.map((item)=>(
                    <ul key={item.card?.info?.id}>
                        <li >{item.card?.info?.name} </li>
                    </ul>
                ))
            }

        </div>
    )
}

export default RestaurantMenu

