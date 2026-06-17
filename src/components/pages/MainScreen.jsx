import { Link } from 'react-router-dom';
import HamburgerIcon from '../HamburgerIcon';
import MobileNavbar from '../MobileNavbar';
import Navbar from '../Navbar';
import Logo from '../shared/Logo';

const MainScreen = () => {

    
    return (  
        <>
    <header className="landing-page">
       <div className="navbar">
        <div className="navbar__container container">
            <Logo/>
            <Navbar>
                    <li className="navbar__menu-item"><Link className="navbar__menu-link" to={{ pathname: "/users" }} target="_self">Users</Link></li>
                    <li className="navbar__menu-item"><Link className="navbar__menu-link" to={{ pathname: "/vehicle" }} target="_self">Vehicle</Link></li>
                    <li className="navbar__menu-item"><Link className="navbar__menu-link" to={{ pathname: "/" }} target="_self">Log out</Link></li>
            </Navbar>
            <div className="navbar__mobile-menu">
                <HamburgerIcon/>
                <MobileNavbar>
                    <li className="navbar__mobile-menu-item"><Link className="navbar__mobile-menu-link" to={{ pathname: "/users" }} target="_self">Users</Link></li>
                    <li className="navbar__mobile-menu-item"><Link className="navbar__mobile-menu-link" to={{ pathname: "/vehicle" }} target="_self">Vehicle</Link></li>
                    <li className="navbar__menu-item"><Link className="navbar__menu-link" to={{ pathname: "/" }} target="_self">Log out</Link></li>
                </MobileNavbar>
            </div>
        </div>
       </div>
    </header>
        </>
    );
}
export default MainScreen
