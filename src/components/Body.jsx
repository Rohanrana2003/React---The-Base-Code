import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/CustomHooks/useOnlineStatus";
import useListOfRestaurants from "../utils/CustomHooks/useListOfRestaurants"
import Footer from "./Footer";


const Body = () => {
    const [listOfRestaurantsClone, setListOfRestaurantsClone] = useState([]);
    const [filterValue, setFilterValue] = useState('Top Rated Restaurants')
    const [searchValue, setSearchValue] = useState('');

    const listOfRestaurants = useListOfRestaurants();

    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        setListOfRestaurantsClone(listOfRestaurants);
    },[listOfRestaurants])


    if (onlineStatus === false) {
        return <div className="online-status">
                    <h1>Looks like you don't have an active <span>Internet connection</span></h1>
                </div>
    }


    const filterRestaurants = () => {

        if (filterValue === 'Top Rated Restaurants') {
            setFilterValue('See all Restaurants');
            setListOfRestaurantsClone(listOfRestaurants && listOfRestaurants.filter(rest => rest.info.avgRating > 4.3));
        }
        else {
            setFilterValue('Top Rated Restaurants');
            setListOfRestaurantsClone(listOfRestaurants);
        }
    }

    const handleSearch = (e) =>{
        setSearchValue(e.target.value)
        setListOfRestaurantsClone(listOfRestaurants.filter(rest => rest.info.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    return listOfRestaurants && listOfRestaurants?.length == 0 ? <Shimmer /> : (

        <div className="body">

            <div className="buttons">

                <button className="filter-btn" onClick={filterRestaurants}> {filterValue} </button>

                <div className="search">
                    <input type="search" onChange={handleSearch}
                        className="search-box"
                        value={searchValue}
                        placeholder="Search for restaurants and food"
                        data-testid="searchInput"
                         />
                </div>


            </div>

            <div className="rest-container">
                {
                    listOfRestaurantsClone && listOfRestaurantsClone?.map((restaurant) => (
                        <Link key={restaurant.info.id} to={'/restaurant/' + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
                    ))
                }
            </div>

            <Footer/>
        </div>
    )
}
export default Body;