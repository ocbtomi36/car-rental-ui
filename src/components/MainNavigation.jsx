import Logo from '../shared/Logo';
import HamburgerIcon from '../shared/HamburgerIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link, Form, useRouteLoaderData } from 'react-router-dom';


const MainNavigation = ({handleClick , isMainMobileMenuOpen }) => {
    const token = useRouteLoaderData('root');
    return ( 
        <>
           <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__logo">
                    <h1 className="navbar__logo-text secondary"><span className="car">C</span>ar<span className="rent">Rent</span><span className="and">&</span><span className="trade">T</span><span className="rade">rade</span></h1>
                </div>
                <div className="navbar__menu">
                    <ul className="navbar__menu-list">
                        {token && (
                            <>
                                <li className="navbar__menu-item"><NavLink className={({isActive}) => isActive ? 'navbar__menu-link active' : 'navbar__menu-link' } to="/employees" target="_self">Employees</NavLink></li>
                                <li className="navbar__menu-item"><NavLink className={({isActive}) => isActive ? 'navbar__menu-link active' : 'navbar__menu-link' } to="/customers" target="_self">Customers</NavLink></li>
                                <li className="navbar__menu-item"><NavLink className={({isActive}) => isActive ? 'navbar__menu-link active' : 'navbar__menu-link' } to="/vehicle" target="_self">Vehicle</NavLink></li>
                                <li className="navbar__menu-item"><NavLink className={({isActive}) => isActive ? 'navbar__menu-link active' : 'navbar__menu-link' } to="/"target="_self">Home</NavLink></li>
                                <li>
                                    <Form action='/logout' method='post'>
                                        <button className='navbar__logout-btn'>Logout</button>
                                    </Form>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
                <div className="navbar__mobile-menu">
                   <HamburgerIcon handleClick={handleClick}/>
                    <div className={isMainMobileMenuOpen ? "navbar__mobile-menu-items active" : "navbar__mobile-menu-items "}>
                        <ul className="navbar__mobile-menu-list">
                            <li className="navbar__mobile-menu-item"><NavLink className={({isActive}) => isActive ? 'navbar__mobile-menu-link active' : 'navbar__mobile-menu-link' } to="/employees" target="_self">Employees</NavLink></li>
                            <li className="navbar__mobile-menu-item"><NavLink className={({isActive}) => isActive ? 'navbar__mobile-menu-link active' : 'navbar__mobile-menu-link' } to="/customers" target="_self">Customers</NavLink></li>
                            <li className="navbar__mobile-menu-item"><NavLink className={({isActive}) => isActive ? 'navbar__mobile-menu-link active' : 'navbar__mobile-menu-link' } to="/vehicle" target="_self">Vehicle</NavLink></li>
                            <li className="navbar__mobile-menu-item"><NavLink className={({isActive}) => isActive ? 'navbar__mobile-menu-link active' : 'navbar__mobile-menu-link' } to="/"target="_self">Home</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
           </div>
        </>
     );
}
 
export default MainNavigation;

/**


.navbar__menu {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    padding-left: 1rem;
    padding-right: 1rem;
}


.navbar__menu-item {
    display: block;
    text-align: center;
    font-size: 1.3rem;
}


.navbar__menu-link.active{
    color: var(--dark-secondary-color);
    border-bottom: 1.5px solid var(--dark-primary-color);
    padding-bottom: 0.5rem;
}




 */