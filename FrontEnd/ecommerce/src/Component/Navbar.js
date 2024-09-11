import '../Style/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    return (
        <div className="Navbar">
            <span id="logo"><strong>SHOP.CO</strong></span>
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
                    <FontAwesomeIcon icon={faCartShopping} style={{ marginRight: '40px' }} />
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;