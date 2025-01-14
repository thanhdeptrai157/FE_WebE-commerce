import '../Style/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Navbar = () => {
    
    return (
        <div className="Navbar">
             <Link to="/" id="logo">
                <strong>SHOP.CO</strong>
            </Link>
            <div className='itemNav'>
                <ul className="listItems">
                    <li>Shop</li>
                    <li>On Sale</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>
                </ul>
            </div>
            
            <div className="searchBar">
                <div className='searchItems'>
                    <span style={{ padding: "10px" }}><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                    <input id='inputSearch' placeholder='Search for products' />
                </div>
            </div>
            <div className='UserZone'>
                <div className='User-cart' >
                    <img src='/Image/Cart.svg'/>
                    <img src='/Image/User.svg' style = {{marginLeft: "74%"}}/>
                    {/* <FontAwesomeIcon icon={faCartShopping} style={{ marginRight: '40px' }} />
                    <FontAwesomeIcon icon={faUser} /> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;