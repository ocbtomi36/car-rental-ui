const Navbar = () => {
    return ( 
        <div className="navbar__menu">
             <ul className="navbar__menu-list">
                <li className="navbar__menu-item"><a className="navbar__btn btn" href="./userDetail.html" target="_blank">Users</a></li>
                <li className="navbar__menu-item"><a className="navbar__btn btn" href="./carDetail.html" target="_blank">Cars</a></li>
            </ul>
        </div>
     );
}
 
export default Navbar;