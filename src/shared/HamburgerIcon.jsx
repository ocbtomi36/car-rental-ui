import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HamburgerIcon = ({handleClick}) => {
    
    return (  
        <div className="navbar__mobile-menu-toggle"  onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} size='{2x}' className='fas user-management'/>
        </div>
    );
}
 
export default HamburgerIcon;