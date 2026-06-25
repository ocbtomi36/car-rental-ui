import { redirect, useLoaderData } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const AuthenticationPage = () => {

    const data = useLoaderData();
    return ( 
        <AuthForm />
     );
}
 
export default AuthenticationPage;

export async function action({request}) {
    const data = await request.formData();
    const authData = {
        email: data.get('email'),
        password: data.get('password')
    }
    const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(authData)
    });
    if(!response.ok) {
        return response
    }

    const resData = await response.json();
    const token = resData.token;
    localStorage.setItem("token", resData.token)
    

    return redirect('/employees');
}