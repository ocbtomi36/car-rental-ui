import { Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const HomePage = () => {
    return ( 
        <>
        <div className="main-content">
            <Link className="main-content__btn btn" to="auth" target="_self">Login</Link>
        </div>
        </>
     );
}
 
export default HomePage;