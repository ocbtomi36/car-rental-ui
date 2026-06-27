import HamburgerIcon from '../shared/HamburgerIcon'
import { NavLink } from 'react-router-dom';

const SubNavigation = ({handleClick , menuOpen, navbarHeadlineText}) => {
    return ( 
        <div className="navbar-subnavigation">
            <div className="navbar__container container">
                <h2 className="navbar__headline-text">{navbarHeadlineText}</h2>
                <div className="navbar__menu">
                    <ul className="navbar__menu-list">
                        <li className="navbar__menu-item"><NavLink to="" end className={({isActive}) => isActive ? "navbar__menu-link active" : "navbar__menu-link" }>List All Employees</NavLink></li>
                        <li className="navbar__menu-item"><NavLink to="new" className={({isActive}) => isActive ? "navbar__menu-link active" : "navbar__menu-link" } target="_self">Add New Employee</NavLink></li>
                    </ul>
                </div>
                <div className="navbar__mobile-menu">
                    <HamburgerIcon handleClick={handleClick}/>
                    <div className={menuOpen ? 'navbar__mobile-menu-items active' : 'navbar__mobile-menu-items'}  >
                        <ul className="navbar__mobile-menu-list">
                            <li className="navbar__mobil-menu-item"><NavLink to="" end  className={({isActive}) => isActive ? "navbar__mobile-menu-link active" : "navbar__mobile-menu-link" } >List All Employees</NavLink></li>
                            <li className="navbar__mobil-menu-item"><NavLink to="new" className={({isActive}) => isActive ? "navbar__mobile-menu-link active" : "navbar__mobile-menu-link" } >Add New Employee</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SubNavigation;