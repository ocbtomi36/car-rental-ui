import PropTypes from "prop-types";

const MobileNavbar = ({children}) => {

    return (  
        <div className="navbar__mobile-menu-items">
            <ul className="navbar__mobile-menu-list">
                {children}                            
            </ul>
        </div>
    );
}

MobileNavbar.propTypes = {
    children: PropTypes.node.isRequired
}

export default MobileNavbar;