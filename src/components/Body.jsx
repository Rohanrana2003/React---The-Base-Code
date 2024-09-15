import RestaurantCard from "./RestaurantCard";
import { DATA_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

   useEffect(()=>{
    fetchData();
   }, [])

   const fetchData = async() =>{
    const data = await fetch(DATA_URL)
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }

 

   return listOfRestaurants.length === 0 ? <Shimmer/> : (
    
        <div className="body">

            <div className="filter">
                <button className="filter-btn" onClick={()=>setListOfRestaurants(listOfRestaurants.filter(rest=>rest.info.avgRating > 4.1))}>
                    Top Rated Restaurants
                </button>
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