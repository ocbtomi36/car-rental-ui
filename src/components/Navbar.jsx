import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const handleClick = () => {
                const mobileMenu = document.querySelector('.navbar__mobile-menu-items')
                mobileMenu.classList.toggle('active');
    }
    return ( 
    <>
        <div className="navbar__menu">
            <ul className="navbar__menu-list">
                <li className="navbar__menu-item"><a className="navbar__btn btn" href="/users" target="_blank">Users</a></li>
                <li className="navbar__menu-item"><a className="navbar__btn btn" href="/car" target="_blank">Cars</a></li>
            </ul>
        </div>
        <div className="navbar__mobile-menu">
        <div className="navbar__mobile-menu-toggle" onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} size='{2x}' className='fas'/>
        </div>
        <div className="navbar__mobile-menu-items active">
            <ul className="navbar__mobile-menu-list">
                <li className="navbar__mobil-menu-item"><a className="navbar__mobile-menu-link" href="./userDetail.html" target="_blank">Users</a></li>
                <li className="navbar__mobil-menu-item"><a className="navbar__mobile-menu-link" href="./carDetail.html" target="_blank">Cars</a></li>
            </ul>
        </div>
        </div>
    </>
     );
}
 
export default Navbar;