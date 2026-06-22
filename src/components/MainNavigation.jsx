import Logo from '../shared/Logo';
import HamburgerIcon from '../shared/HamburgerIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const MainNavigation = () => {
    return ( 
        <div className="navbar">
        <div className="navbar__container container">
            <Logo/>
            <div className="navbar__menu">
                <ul className="navbar__menu-list">
                    <li className="navbar__menu-item"><Link className="navbar__menu-link" to={{ pathname: "/" }} target="_self">Log in</Link></li>
                </ul>
            </div>
            <div className="navbar__mobile-menu">
                <HamburgerIcon/>
                <div className="navbar__mobile-menu-items">
                    <ul className="navbar__mobile-menu-list">
                        <li className="navbar__menu-item"><Link className="navbar__menu-link" to={{ pathname: "/" }} target="_self">Log in</Link></li>
                    </ul>
                </div>
            </div>
        </div>
       </div>
     );
}
 
export default MainNavigation;