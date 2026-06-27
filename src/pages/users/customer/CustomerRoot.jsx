import { Outlet } from "react-router-dom";
import SubNavigation from "../../../components/SubNavigation";
import { useState } from "react";

const CustomerRootLayout = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const navbarHeadlineText = "Customer Management";
    const menuItems = [];
    const handleClick = () => {
                setMenuOpen(prev => !prev);
    }

    return ( 
        <>
            <SubNavigation handleClick={handleClick} menuOpen={menuOpen} navbarHeadlineText={navbarHeadlineText}/>
            <Outlet />
        </>
     );
}
 
export default CustomerRootLayout;