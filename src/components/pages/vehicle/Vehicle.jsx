import Navbar from '../../Navbar';
import MobileNavbar from '../../MobileNavbar';
import HamburgerIcon from '../../HamburgerIcon';
import VehicleDatas from './VehicleDatas';
import VehicleList from './VehicleList'
import { useState } from 'react';

const Vehicle = () => {

    const [vehicles] = useState(VehicleDatas);
    const [showVehicles, setShowVehicles] = useState(true);
    const handleClick = () => {
        if(showVehicles === true) {
            setShowVehicles(false) 
        } else {
            setShowVehicles(true)
        }
    }
    return (  
        <>
    <header className="landing-page">
        <div className="navbar">
            <div className="navbar__container container">
                <h1 className="navbar__headline-text">Vehicle Management</h1>
                <Navbar>
                    <li className="navbar__menu-item"><a onClick={handleClick} className="navbar__menu-link" target="_self">List All Vehicle</a></li>
                    <li className="navbar__menu-item"><a className="navbar__menu-link" target="_self">Add New Vehicle</a></li>
                    <li className="navbar__menu-item"><a className="navbar__menu-link" href='/mainscreen' target="_self">Back</a></li>
                </Navbar>
                 <div className="navbar__mobile-menu">
                    <HamburgerIcon />
                    <MobileNavbar>
                        <li className="navbar__mobil-menu-item"><a className="navbar__mobile-menu-link" onClick={handleClick} target="_self">List all Vehicle</a></li>
                        <li className="navbar__mobil-menu-item"><a className="navbar__mobile-menu-link" href="/allCars" target="_self">Add New Vehicle</a></li>
                        <li className="navbar__mobil-menu-item"><a className="navbar__mobile-menu-link" href="/mainscreen" target="_self">Back</a></li>
                    </MobileNavbar>
                 </div>
            </div>
        </div>
        <VehicleList vehicles={vehicles} showVehicle={showVehicles}/>
    </header>
        </>
    );
}
export default Vehicle