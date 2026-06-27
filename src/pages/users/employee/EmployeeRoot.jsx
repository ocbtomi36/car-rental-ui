import { Outlet } from "react-router-dom";
import { useState } from "react";
import SubNavigation from "../../../components/SubNavigation";

const EmployeeRootLayout = () => {

    const navbarHeadlineText = "Employee Management"
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClick = () => {
                setMenuOpen(prev => !prev);
    }

    return (
        <> 
            <SubNavigation handleClick={handleClick} menuOpen={menuOpen} navbarHeadlineText={navbarHeadlineText} />
            <Outlet />
        </> 
     );
}
 
export default EmployeeRootLayout;