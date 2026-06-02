const LoginForm = () => {
    return (  
        <main className="hero">
        <div className="login-body">
            <div className="login-wrapper">
                <form action="">
                    <h1 className="login-body__heading">Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required/>
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <i className="fa-solid fa-lock"></i>
                    </div>
                    <div className="remember-forgot">
                        <p>If forgot your password please contant our technicals</p>
                    </div>
                    <a href="./index.html" className="login-button btn">Login</a>
                </form>            
            </div>
        </div>
    </main>
    );
}
 
export default LoginForm;