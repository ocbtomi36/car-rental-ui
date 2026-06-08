
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
                 <li className="navbar__menu-item"><a className="navbar__menu-link" href="./users" target="_blank">Users</a></li>
                    <li className="navbar__menu-item"><a className="navbar__menu-link" href="./cars" target="_blank">Cars</a></li>
            </Navbar>
            <div class="navbar__mobile-menu">
                <HamburgerIcon/>
                <MobileNavbar>
                    <li class="navbar__mobile-menu-item"><a class="navbar__mobile-menu-link" href="./userDetail.html" target="_blank">Users</a></li>
                        <li class="navbar__mobile-menu-item"><a class="navbar__mobile-menu-link" href="./carDetail.html" target="_blank">Cars</a></li>
                </MobileNavbar>
            </div>
        </div>
       </div>
    </header>
        </>
    );
}
export default MainScreen
