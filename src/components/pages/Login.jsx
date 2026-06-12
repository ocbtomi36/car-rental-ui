import Logo from "../shared/Logo";

const Login = () => {
    return (  
        <header className="landing-page">
            <div className="navbar">
                <div className="navbar__container container">
                    <Logo/>
                </div>
            </div>
            <div className="main-content">
                <a className="main-content__btn btn" href="./loginform" target="_self">Login</a>
            </div>
        </header>
    );
}
 
export default Login;