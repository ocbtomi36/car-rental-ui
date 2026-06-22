import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";


const RootLayout = () => {
    return ( 
        <>
            <main className="landing-page">
                <Outlet />
            </main>
        </>
     );
}
 
export default RootLayout;