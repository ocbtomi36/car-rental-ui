import Logo from "../shared/Logo";
import Navbar from "../Navbar";

const MainScreen = () => {
    return (  
        <>
            <header className="hero">
                <div className="navbar">
                    <div className="navbar__container container">
                        <Logo/>             
                        <Navbar/>
                    </div>
                </div>
                <div className="main-content">
                    <a className="main-content__btn btn hidden">Login</a>
                </div>
            </header>
        </>
    );
}
 
export default MainScreen
