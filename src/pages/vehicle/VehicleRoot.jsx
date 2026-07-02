import { Outlet } from "react-router-dom";
import SubNavigation from "../../components/SubNavigation";
import { useState } from "react";

const VehicleRootLayout = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const navbarHeadlineText = "Vehicle Management";
    const menuItems = [
        {
            id: '1',
            to: '',
            title: 'List All Vehicles',
            end: true
        },
        {
            id: '2',
            to: 'new',
            title: 'Add New Vehicles'
        },
    ];
    const handleClick = () => {
                setMenuOpen(prev => !prev);
    }


    return ( 
        <>
            <SubNavigation handleClick={handleClick} menuOpen={menuOpen} menuItems={menuItems} navbarHeadlineText={navbarHeadlineText}/>
            <Outlet />
        </>
     );
}
 
export default VehicleRootLayout;