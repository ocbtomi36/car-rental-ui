import { Link } from "react-router-dom";
import { useRouteLoaderData } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const HomePage = () => {

    const token = useRouteLoaderData('root');
    console.log(!token)
    return ( 
        <>
        {!token && (
            <div className="main-content">
                <Link className="main-content__btn btn" to="auth" target="_self">Login</Link>
            </div>
            )}
        </>
     );
}
 
export default HomePage;