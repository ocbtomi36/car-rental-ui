import { useState } from "react";

import Navbar from "../../../Navbar";
import HamburgerIcon from "../../../HamburgerIcon";
import MobileNavbar from "../../../MobileNavbar";
import EmployeeList from "./EmployeeList";
import UserDatas from "../UserDatas";

const Employees = () => {

    const [employees] = useState(() => {
       return UserDatas.filter(user => user.role !== 'Customer')});
    const [showEmployee, setShowEmployee] = useState(true);
    const handleClick = () => {
        if(showEmployee === true) {
            setShowEmployee(false)
        } else {
            setShowEmployee(true)
        }
    }
    return ( 
        <>
            <main className="landing-page">
                <div className="navbar">
                    <div className="navbar__container container">
                        <h1 className="navbar__headline-text">Employees</h1>
                        <Navbar>
                            <li className="navbar__menu-item"><a onClick={handleClick} className="navbar__menu-link">List All Employees</a></li>
                            <li className="navbar__menu-item"><a className="navbar__menu-link" href="/addEmployee" target="_self">Add New Employee</a></li>
                            <li className="navbar__menu-item"><a className="navbar__menu-link" href="/users" target="_self">Back</a></li>
                        </Navbar>
                        <div className="navbar__mobile-menu">
                            <HamburgerIcon />
                            <MobileNavbar>
                                <li className="navbar__mobil-menu-item"><a onClick={handleClick} className="navbar__mobile-menu-link" target="_self" >List All Employees</a></li>
                                <li className="navbar__mobil-menu-item"><a className="navbar__mobile-menu-link"     target="_self">Add New Employee</a></li>
                                <li className="navbar__mobil-menu-item"><a className="navbar__mobile-menu-link" href="/users" target="_self">Back</a></li>
                            </MobileNavbar>
                        </div>
                    </div>
                 </div>
                <EmployeeList employees={employees} showEmployee={showEmployee} />
            </main>
        </>
     );
}
 
export default Employees;
