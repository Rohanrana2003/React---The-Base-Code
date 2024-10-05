import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useEffect, useRef} from 'react';


const Header = () => {
    const cartItems = useSelector(store=>store.cart.items);
    const error = useRef();

    useEffect(() => {

        setTimeout(() => {
            error.current.style.display='none';
        }, 4000);
    }, [])
    

    return (
        <div className='header'>

            <p ref={error} className='temp'>Please Allow CORS activation extension!</p>

            <div className='logo-container'>
                <img className='logoImg' src="https://i.ibb.co/bds3n5B/LOGO.png" alt="LOGO" />
               <h1 className='logo'>REACT-AURANT</h1>

            </div>

            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart({cartItems.length})</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;