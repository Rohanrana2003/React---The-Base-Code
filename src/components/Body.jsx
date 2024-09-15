import RestaurantCard from "./RestaurantCard";
import { DATA_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [listOfRestaurantsClone, setListOfRestaurantsClone] = useState([]);
    const [filterValue, setFilterValue] = useState('Top Rated Restaurants')
    const [login, setLogin] = useState('Login');
    const [searchValue, setSearchValue] = useState('');

   useEffect(()=>{
    fetchData();
   }, [])

   const fetchData = async() =>{
    const data = await fetch(DATA_URL)
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurantsClone(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }

   const filterRestaurants = () =>{

        if(filterValue === 'Top Rated Restaurants'){
            setFilterValue('See all Restaurants');
            setListOfRestaurantsClone(listOfRestaurants.filter(rest=>rest.info.avgRating > 4.1));
        }
        else{
            setFilterValue('Top Rated Restaurants');
            setListOfRestaurantsClone(listOfRestaurants);
        }

   }

   return listOfRestaurants.length == 0 ? <Shimmer/> : (

        <div className="body">

            <div className="buttons">
                <button className="filter-btn" onClick={filterRestaurants}> {filterValue} </button>

                <div className="search">

                    <input type="search"  onChange={(e)=>setSearchValue(e.target.value)}
                        className="search-box" 
                        value={searchValue} 
                        placeholder="Search for restaurants and food" />


                    <button className="search-button" onClick={()=>setListOfRestaurantsClone(listOfRestaurants.filter(rest=>rest.info.name.toLowerCase().includes(searchValue.toLowerCase())))}>Search</button>
                    
                </div> 

                <button className="login" onClick={()=>login === 'Login'? setLogin('Logout'):setLogin('Login')}>{login}</button>
            </div>

            <div className="rest-container">
                {
                    listOfRestaurantsClone.map((restaurant)=>(
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}
export default Body;