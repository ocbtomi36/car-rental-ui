import { useState } from "react";
import UserDatas from "../UserDatas"
import Navbar from "../../../Navbar";
import HamburgerIcon from "../../../HamburgerIcon";
import MobileNavbar from "../../../MobileNavbar";
import CustomerList from "./CustomerList";
import AddCustomer from "./AddCustomer";

const Customers = () => {

    const [customers] = useState(() => {
       return UserDatas.filter(user => user.role === 'Customer');
    }); 

    const [showCustomers, setShowCustomers] = useState(true);
    const [showAddForm, setShowAddForm] = useState(true);
    const handleClick = () => {
        setShowAddForm(true)
        if(showCustomers === true) {
            setShowCustomers(false)
        } else {
            setShowCustomers(true)
        }
    }
    const handleAddCustomer = () => {
        setShowCustomers(true);
        if(showAddForm === true) {
            setShowAddForm(false)
        } else {
            setShowAddForm(true)
        }
    }
    return ( 
        <>
            <main className="landing-page">
                <div className="navbar">
                    <div className="navbar__container container">
                        <h1 className="navbar__headline-text">Customers</h1>
                        <Navbar>
                            <li className="navbar__menu-item"><a onClick={handleClick} className="navbar__menu-link">List All Customers</a></li>
                            <li className="navbar__menu-item"><a className="navbar__menu-link" onClick={handleAddCustomer}>Add New Customers</a></li>
                            <li className="navbar__menu-item"><a className="navbar__menu-link" href="/users" target="_blank">Back</a></li>
                        </Navbar>
                        <div className="navbar__mobile-menu">
                            <HamburgerIcon />
                            <MobileNavbar>
                                <li className="navbar__mobil-menu-item"><a onClick={handleClick} className="navbar__mobile-menu-link" >List All Customers</a></li>
                                <li className="navbar__mobil-menu-item"><a onClick={handleAddCustomer} className="navbar__mobile-menu-link"  >Add New Customers</a></li>
                                <li className="navbar__mobil-menu-item"><a className="navbar__mobile-menu-link" href="/users">Back</a></li>
                            </MobileNavbar>
                        </div>
                    </div>
                 </div>
                 <CustomerList customers={customers} showCustomers={showCustomers}/>
                 <AddCustomer showAddForm={showAddForm}/>
            </main>
        </>
     );
}
 
export default Customers;