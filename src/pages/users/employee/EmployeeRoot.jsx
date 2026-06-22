import { Outlet } from "react-router-dom";
import EmployeeNavigation from "./EmployeeNavigation";

const EmployeeRootLayout = () => {
    return (
        <>
                <EmployeeNavigation />
                <Outlet />
        </> 
     );
}
 
export default EmployeeRootLayout;