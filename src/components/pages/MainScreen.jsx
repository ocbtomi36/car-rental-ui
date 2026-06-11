
import HamburgerIcon from '../HamburgerIcon';
import MobileNavbar from '../MobileNavbar';
import Navbar from '../Navbar';
import Logo from '../shared/Logo';

const MainScreen = () => {

    
    return (  
        <>
    <header className="hero">
       <div className="navbar">
        <div className="navbar__container container">
            <Logo/>
            <Navbar>
                    <li className="navbar__menu-item"><a className="navbar__menu-link" href="./users" target="_self">Users</a></li>
                    <li className="navbar__menu-item"><a className="navbar__menu-link" href="./vehicle" target="_self">Vehicle</a></li>
            </Navbar>
            <div className="navbar__mobile-menu">
                <HamburgerIcon/>
                <MobileNavbar>
                    <li className="navbar__mobile-menu-item"><a className="navbar__mobile-menu-link" href="./users" target="_self">Users</a></li>
                    <li className="navbar__mobile-menu-item"><a className="navbar__mobile-menu-link" href="./vehicle" target="_self">Vehicle</a></li>
                </MobileNavbar>
            </div>
        </div>
       </div>
    </header>
        </>
    );
}
export default MainScreen
