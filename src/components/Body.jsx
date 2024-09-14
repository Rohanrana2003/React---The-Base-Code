import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData"
import { useEffect, useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resData);

   useEffect(()=>{
    fetchData();
   }, [])

   const fetchData = async() =>{
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const response = await data.json();
    console.log(response);
   }

    return (
        <div className="body">

            <div className="filter">
                <button className="filter-btn" onClick={()=>setListOfRestaurants(listOfRestaurants.filter(rest=>rest.info.avgRating > 4.1))}>
                    Top Rated Restaurants</button>
            </div>

            <div className="rest-container">
                {
                    listOfRestaurants.map((restaurant)=>(
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}
export default Body;