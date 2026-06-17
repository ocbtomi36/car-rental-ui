import Navbar from "../../Navbar";
import MobileNavbar from "../../MobileNavbar";
import HamburgerIcon from "../../HamburgerIcon";
import { Link } from "react-router-dom";


const Users = () => {
    return (  
        <>
    <main className="landing-page">
        <div className="navbar">
            <div className="navbar__container container">
                <h1 className="navbar__headline-text">User Management</h1>
                <Navbar>
                    <li className="navbar__menu-item"><Link className="navbar__menu-link" to={{ pathname: "/employees" }} target="_self">Employee</Link></li>
                    <li className="navbar__menu-item"><Link className="navbar__menu-link" to={{ pathname: "/customers" }} target="_self">Customer</Link></li>
                    <li className="navbar__menu-item"><Link className="navbar__menu-link" to={{ pathname: "/mainscreen" }} target="_self">Back</Link></li>
                </Navbar>
                 <div className="navbar__mobile-menu">
                    <HamburgerIcon />
                    <MobileNavbar>
                        <li className="navbar__mobil-menu-item"><Link className="navbar__mobile-menu-link" to={{ pathname: "/employees" }} target="_self">Employee</Link></li>
                        <li className="navbar__mobil-menu-item"><Link className="navbar__mobile-menu-link" to={{ pathname: "/customers" }} target="_self">Customer</Link></li>
                        <li className="navbar__mobil-menu-item"><Link className="navbar__mobile-menu-link" to={{ pathname: "/mainscreen" }} target="_self">Back</Link></li>
                    </MobileNavbar>
                 </div>
            </div>
        </div>
    </main>
        </>
    );
}
 
export default Users;
