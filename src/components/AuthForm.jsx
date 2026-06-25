import { Form } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faL} from "@fortawesome/free-solid-svg-icons";
const AuthForm = () => {
    return (  
        <main className="landing-page">
        <div className="login-body">
            <div className="login-wrapper">
                <Form method="post">
                    <h1 className="login-body__heading">Login</h1>
                    <div className="input-box">
                        <input type="text" id="email" name="email" placeholder="Email" required/>
                        <FontAwesomeIcon className="fa-icon" icon={faUser}/>
                    </div>
                    <div className="input-box">
                        <input type="password" id="password" name="password" placeholder="Password" required />
                        <FontAwesomeIcon className="fa-icon" icon={faLock}/>
                    </div>
                    <div className="remember-forgot">
                        <p>If forgot your password please contant our technicals</p>
                    </div>
                    <button type="submit" className="login-button btn" target="_self">Login</button>
                </Form>            
            </div>
        </div>
    </main>
    );
}
 
export default AuthForm;