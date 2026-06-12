import Navbar from "../../Navbar";
import MobileNavbar from "../../MobileNavbar";
import HamburgerIcon from "../../HamburgerIcon";



const Users = () => {
    return (  
        <>
    <main className="landing-page">
        <div className="navbar">
            <div className="navbar__container container">
                <h1 className="navbar__headline-text">User Management</h1>
                <Navbar>
                    <li className="navbar__menu-item"><a className="navbar__menu-link" href="/employees" target="_self">Employee</a></li>
                    <li className="navbar__menu-item"><a className="navbar__menu-link" href="/customers" target="_self">Customer</a></li>
                    <li className="navbar__menu-item"><a className="navbar__menu-link" href="/mainscreen" target="_self">Back</a></li>
                </Navbar>
                 <div className="navbar__mobile-menu">
                    <HamburgerIcon />
                    <MobileNavbar>
                        <li className="navbar__mobil-menu-item"><a className="navbar__mobile-menu-link" href="/employees" target="_self">Employee</a></li>
                        <li className="navbar__mobil-menu-item"><a className="navbar__mobile-menu-link" href="/customers" target="_self">Customer</a></li>
                        <li className="navbar__mobil-menu-item"><a className="navbar__mobile-menu-link" href="/mainscreen" target="_self">Back</a></li>
                    </MobileNavbar>
                 </div>
            </div>
        </div>
    </main>
        </>
    );
}
 
export default Users;
