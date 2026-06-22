import HamburgerIcon from '../../../shared/HamburgerIcon'
import { Link } from 'react-router-dom';

const EmployeeNavigation = () => {
    return ( 
        <div className="navbar">
            <div className="navbar__container container">
                <h1 className="navbar__headline-text">Employees</h1>
                <div className="navbar__menu">
                    <ul className="navbar__menu-list">
                        <li className="navbar__menu-item"><Link className="navbar__menu-link">List All Employees</Link></li>
                        <li className="navbar__menu-item"><Link className="navbar__menu-link" target="_self">Add New Employee</Link></li>
                    </ul>
                </div>
                <div className="navbar__mobile-menu">
                    <HamburgerIcon />
                    <div className="navbar__mobile-menu-items">
                        <ul className="navbar__mobile-menu-list">
                            <li className="navbar__mobil-menu-item"><Link className="navbar__mobile-menu-link" target="_self" >List All Employees</Link></li>
                            <li className="navbar__mobil-menu-item"><Link className="navbar__mobile-menu-link" target="_self">Add New Employee</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EmployeeNavigation;