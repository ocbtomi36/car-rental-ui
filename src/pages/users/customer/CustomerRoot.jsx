import { Outlet } from "react-router-dom";
import SubNavigation from "../../../components/SubNavigation";
import { useState } from "react";

const CustomerRootLayout = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const navbarHeadlineText = "Customer Management";
    const menuItems = [
        {
            id: '1',
            to: '',
            title: 'List All Customer',
            end: true
        },
        {
            id: '2',
            to: 'new',
            title: 'Add New Customer'
        },
    ];
    const handleClick = () => {
                setMenuOpen(prev => !prev);
    }

    return ( 
        <>
            <SubNavigation handleClick={handleClick} menuOpen={menuOpen} navbarHeadlineText={navbarHeadlineText} menuItems={menuItems}/>
            <Outlet />
        </>
     );
}
 
export default CustomerRootLayout;