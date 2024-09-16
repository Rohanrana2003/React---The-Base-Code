import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [listOfRestaurantsClone, setListOfRestaurantsClone] = useState([]);
    const [filterValue, setFilterValue] = useState('Top Rated Restaurants')
    const [login, setLogin] = useState('Login');
    const [searchValue, setSearchValue] = useState('');

 

   const fetchData = async() =>{
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurantsClone(json?.data?.cards[4   ]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }

   useEffect(()=>{
    fetchData();
   }, [])
   

   const filterRestaurants = () =>{

        if(filterValue === 'Top Rated Restaurants'){
            setFilterValue('See all Restaurants');
            setListOfRestaurantsClone(listOfRestaurants?.filter(rest=>rest.info.avgRating > 4.1));
        }
        else{
            setFilterValue('Top Rated Restaurants');
            setListOfRestaurantsClone(listOfRestaurants);
        }
   }

   return listOfRestaurants && listOfRestaurants?.length == 0 ? <Shimmer/> : (

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
                    listOfRestaurants && listOfRestaurantsClone?.map((restaurant)=>(
                        <Link key={restaurant.info.id} to={'/restaurant/' + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link> 
                    ))
                }
            </div>
        </div>
    )
}
export default Body;