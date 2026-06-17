import { useState, useEffect } from "react";
import Navbar from "../../../Navbar";
import HamburgerIcon from "../../../HamburgerIcon";
import MobileNavbar from "../../../MobileNavbar";
import CustomerList from "./CustomerList";
import AddCustomer from "./AddCustomer";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_CUSTOMERS_API_URL;

/* 1. Fetch date form database */


const Customers = () => {

    const [showCustomers, setShowCustomers] = useState(true);
    const [showAddForm, setShowAddForm] = useState(true);
    const [customers, setCustomers] = useState([]);

    useEffect( () => {

        const fetchCustomers = async () => {
            
            try {
                const res = await fetch({API_URL});
                if(!res.ok) throw new Error('Failed to fetch data');
                const data = await res.json();
                console.log(data);
                
            } catch (err) {
                
            }

        }

    } ) 
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
                            <li className="navbar__menu-item"><Link className="navbar__menu-link" to={{ pathname: "/users" }}>Back</Link></li>
                        </Navbar>
                        <div className="navbar__mobile-menu">
                            <HamburgerIcon />
                            <MobileNavbar>
                                <li className="navbar__mobil-menu-item"><a onClick={handleClick} className="navbar__mobile-menu-link" >List All Customers</a></li>
                                <li className="navbar__mobil-menu-item"><a onClick={handleAddCustomer} className="navbar__mobile-menu-link"  >Add New Customers</a></li>
                                <li className="navbar__mobil-menu-item"><Link className="navbar__mobile-menu-link" to={{ pathname: "/users" }}>Back</Link></li>
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