import { Outlet } from "react-router-dom";
import { useState } from "react";
import EmployeeNavigation from "../../../components/employee/EmployeeNavigation";

const EmployeeRootLayout = () => {

     const [employeeMenuOpen, setEmpmolyeeMenuOpen] = useState(false);
    const handleClick = () => {
                setEmpmolyeeMenuOpen(prev => !prev);
    }

    return (
        <> 
            <EmployeeNavigation handleClick={handleClick} employeeMenuOpen={employeeMenuOpen} />
            <Outlet />
        </> 
     );
}
 
export default EmployeeRootLayout;