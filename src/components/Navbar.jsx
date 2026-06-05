const Navbar = ({children}) => {

    return (
        <div className="navbar__menu">
            <ul className="navbar__menu-list">
                { children }
            </ul>
        </div>
     );
}
 
export default Navbar;