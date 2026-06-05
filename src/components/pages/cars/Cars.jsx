import Navbar from '../../Navbar';
import MobileNavbar from '../../MobileNavbar';
import HamburgerIcon from '../../HamburgerIcon';


const Cars = () => {
    return (  
        <>
    <header className="hero">
        <div className="navbar">
            <div className="navbar__container container">
                <h1 className="navbar__headline-text">Car Management</h1>
                <Navbar>
                    <li className="navbar__menu-item"><a className="navbar__btn btn" href="/allCars" target="_blank">Cars</a></li>
                </Navbar>
                 <div className="navbar__mobile-menu">
                    <HamburgerIcon />
                    <MobileNavbar>
                        <li className="navbar__mobil-menu-item"><a className="navbar__mobile-menu-link" href="/allCars" target="_blank">Cars</a></li>
                    </MobileNavbar>
                 </div>
            </div>
        </div>
        <div className="main-content">
            <a className="main-content__btn btn" href="/mainscreen" target="_blank">Back</a>
        </div>
    </header>
        </>
    );
}
export default Cars