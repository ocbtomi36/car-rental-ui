const MobileNavbar = ({children}) => {

    return (  
       <div className="navbar__mobile-menu-items">
            <ul className="navbar__mobile-menu-list">
                {children}                            
            </ul>
        </div>
    );
}
 
export default MobileNavbar;