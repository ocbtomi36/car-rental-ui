import HamburgerIcon from '../shared/HamburgerIcon'
import { NavLink } from 'react-router-dom';

const SubNavigation = ({handleClick , menuOpen, navbarHeadlineText, menuItems}) => {
    return ( 
        <div className="navbar-subnavigation">
            <div className="navbar__container container">
                <h2 className="navbar__headline-text">{navbarHeadlineText}</h2>
                <div className="navbar__menu">
                    <ul className="navbar__menu-list">
                        {menuItems.map((item) => (
                            <li className="navbar__menu-item" key={item.id}><NavLink to={item.to} end={item.end} className={({isActive}) => isActive ? "navbar__menu-link active" : "navbar__menu-link" }>{item.title}</NavLink></li>
                        ))}
                        
                    </ul>
                </div>
                <div className="navbar__mobile-menu">
                    <HamburgerIcon handleClick={handleClick}/>
                    <div className={menuOpen ? 'navbar__mobile-menu-items active' : 'navbar__mobile-menu-items'}  >
                        <ul className="navbar__mobile-menu-list">
                            {menuItems.map((item) => (
                            <li className="navbar__mobil-menu-item" key={item.id} ><NavLink to={item.to} end className={({isActive}) => isActive ? "navbar__mobile-menu-link active" : "navbar__mobile-menu-link" }>{item.title}</NavLink></li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SubNavigation;