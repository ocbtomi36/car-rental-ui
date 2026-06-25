import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useState } from "react";


const RootLayout = () => {

    const [isMainMobileMenuOpen, setIsMainMobileMenuOpen] = useState(false);


    const handleClick = () => {
                setIsMainMobileMenuOpen(prev => !prev);
    }

    return ( 
        <>
            <main className="landing-page">
                <MainNavigation handleClick={handleClick} isMainMobileMenuOpen={isMainMobileMenuOpen}/>
                <Outlet />
            </main>
        </>
     );
}
 
export default RootLayout;