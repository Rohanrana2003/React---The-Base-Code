import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../utils/context/UserContext';


const Header = () => {
    const {loggedInUser} = useContext(UserContext);

    return (
        <div className='header'>

            <div className='logo-container'>
                <img className='logoImg' src="https://i.ibb.co/bds3n5B/LOGO.png" alt="LOGO" />
               <h1 className='logo'>REACT-AURANT</h1>

            </div>

            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/">Cart</Link></li>
                    <li><Link to="/">{loggedInUser}</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;