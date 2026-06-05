import Navbar from "../../Navbar";
import MobileNavbar from "../../MobileNavbar";
import HamburgerIcon from "../../HamburgerIcon";

const Users = () => {

    return (  
        <main className="hero">
        <div className="navbar">
            <div className="navbar__container container">
                <h1 className="navbar__headline-text">User Management</h1>
                <Navbar>
                        <li className="navbar__menu-item"><a className="navbar__btn btn" href="./userDetail.html" target="_blank">Employee</a></li>
                        <li className="navbar__menu-item"><a className="navbar__btn btn" href="./carDetail.html" target="_blank">Customer</a></li>
                </Navbar>
                <div className="navbar__mobile-menu">
                    <HamburgerIcon/>
                    <MobileNavbar>
                            <li className="navbar__mobil-menu-item"><a className="navbar__mobile-menu-link" href="./userDetail.html" target="_blank">Employee</a></li>
                            <li className="navbar__mobil-menu-item"><a className="navbar__mobile-menu-link" href="./carDetail.html" target="_blank">Customer</a></li>
                    </MobileNavbar>
                 </div>        
            </div>
        </div>
    </main>
    );
}
 
export default Users;
