import { useState } from "react";

import Navbar from "../../../Navbar";
import HamburgerIcon from "../../../HamburgerIcon";
import MobileNavbar from "../../../MobileNavbar";
import EmployeeList from "./EmployeeList";
import UserDatas from "../UserDatas";
import AddEmployee from "../employee/AddEmployee"
import { Link } from "react-router-dom";

const Employees = () => {

    const [employees] = useState(() => {
       return UserDatas.filter(user => user.role !== 'Customer')});
    const [showEmployee, setShowEmployee] = useState(true);
    const [showAddForm, setshowAddForm] = useState(true);
    const handleClick = () => {
        setshowAddForm(true);
        if(showEmployee === true) {
            setShowEmployee(false)
        } else {
            setShowEmployee(true)
        }
    }
    const handleAddNewEmployee = () => {
        setShowEmployee(true);
        if(showAddForm === true) {
            setshowAddForm(false)
        } else {
            setshowAddForm(true)
        }
    }
    return ( 
        <>
            <main className="landing-page">
                <div className="navbar">
                    <div className="navbar__container container">
                        <h1 className="navbar__headline-text">Employees</h1>
                        <Navbar>
                            <li className="navbar__menu-item"><Link onClick={handleClick} className="navbar__menu-link">List All Employees</Link></li>
                            <li className="navbar__menu-item"><Link onClick={handleAddNewEmployee} className="navbar__menu-link" target="_self">Add New Employee</Link></li>
                            <li className="navbar__menu-item"><Link className="navbar__menu-link" to={{ pathname: "/users" }} target="_self">Back</Link></li>
                        </Navbar>
                        <div className="navbar__mobile-menu">
                            <HamburgerIcon />
                            <MobileNavbar>
                                <li className="navbar__mobil-menu-item"><Link onClick={handleClick} className="navbar__mobile-menu-link" target="_self" >List All Employees</Link></li>
                                <li className="navbar__mobil-menu-item"><Link onClick={handleAddNewEmployee} className="navbar__mobile-menu-link" target="_self">Add New Employee</Link></li>
                                <li className="navbar__mobil-menu-item"><Link className="navbar__mobile-menu-link" to={{ pathname: "/users" }} target="_self">Back</Link></li>
                            </MobileNavbar>
                        </div>
                    </div>
                 </div>
                <EmployeeList employees={employees} showEmployee={showEmployee} />
                <AddEmployee showAddForm={showAddForm} />
            </main>
        </>
     );
}
 
export default Employees;
