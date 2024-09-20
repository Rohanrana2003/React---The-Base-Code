import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/context/UserContext';
import { useContext } from 'react';


const AppLayout = () => {
    return (
        <UserContext.Provider value={{loggedInUser:'rohan'}}>
        <>
            <Header />
            <Outlet />
        </>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },

        ],
        errorElement:<Error/>,

        
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)