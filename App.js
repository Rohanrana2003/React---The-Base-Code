import React from 'react';
import ReactDOM from 'react-dom/client';



const Header = () =>{
    return(
        <div className='header'>
            <div className='logo-container'>
                <img 
                 className='logo'
                 src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" alt="" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () =>{
    return(
        <div className="res-card">
            <img
             className='res-logo'
             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rvxp5xbniat84r6efku2" alt="card-img" />
            <h3>Meghna Foods</h3>
            <h4>North Indian, Biryani, Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>

        </div>
    )
}

const Body = () =>{
    return (
        <div className="body">

            <div className="search">
                Search
            </div>

            <div className="rest-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>

            </div>

        </div>
    )
}



 const AppLayout = () =>{
    return(
       
        <div className="app">

            <Header/>
            <Body/>

        </div>

    )
 }



ReactDOM.createRoot(document.getElementById('root'))
.render(<AppLayout/>)