import Logo from '../shared/Logo';
import Navbar from '../Navbar';
import MobileNavbar from '../MobileNavbar';
import HamburgerIcon from '../HamburgerIcon';

const MainScreen = () => {
    return (  
        <>
    <header className="hero">
        <div className="navbar">
            <div className="navbar__container container">
                <Logo/>
                <Navbar>
                    <li className="navbar__menu-item"><a className="navbar__btn btn" href="./users" target="_blank">Users</a></li>
                    <li className="navbar__menu-item"><a className="navbar__btn btn" href="./cars" target="_blank">Cars</a></li>
                </Navbar>
                 <div className="navbar__mobile-menu">
                    <HamburgerIcon />
                    <MobileNavbar>
                        <li className="navbar__mobil-menu-item"><a className="navbar__mobile-menu-link" href="./users" target="_blank">Users</a></li>
                        <li className="navbar__mobil-menu-item"><a className="navbar__mobile-menu-link" href="./cars" target="_blank">Cars</a></li>
                    </MobileNavbar>
                 </div>
            </div>
        </div>
    </header>
        </>
    );
}
export default MainScreen
