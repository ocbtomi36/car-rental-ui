import PropTypes from "prop-types";

const Navbar = ({children}) => {

    return (
        <div className="navbar__menu">
            <ul className="navbar__menu-list">
                { children }
            </ul>
        </div>
     );
}
 

Navbar.propTypes = {
    children: PropTypes.node.isRequired
}

export default Navbar;