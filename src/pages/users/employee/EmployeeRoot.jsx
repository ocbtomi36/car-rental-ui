import { Outlet } from "react-router-dom";
import { useState } from "react";
import SubNavigation from "../../../components/SubNavigation";

const EmployeeRootLayout = () => {

    const navbarHeadlineText = "Employee Management"
    const [menuOpen, setMenuOpen] = useState(false);
    const menuItems = [
        {
            id: '1',
            to: '',
            title: 'List All Employees',
            end: true
        },
        {
            id: '2',
            to: 'new',
            title: 'Add New Employee'
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
 
export default EmployeeRootLayout;