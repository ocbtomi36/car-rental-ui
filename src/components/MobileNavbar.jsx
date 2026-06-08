const MobileNavbar = ({children}) => {

    return (  
        <div class="navbar__mobile-menu-items">
            <ul class="navbar__mobile-menu-list">
                {children}                            
            </ul>
        </div>
    );
}
 
export default MobileNavbar;