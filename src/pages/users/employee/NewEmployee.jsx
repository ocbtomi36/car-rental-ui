import { redirect } from "react-router-dom";
import EmployeeForm from "../../../components/employee/EmployeeForm";
import { getAuthToken } from "../../../../util/auth";

const NewEmployeePage = () => {
    return (
        <>
            <EmployeeForm />
        </> 
     );
}
 
export default NewEmployeePage;

export async function action({request, params}) {
    const token = getAuthToken();
    
    const data = await request.formData();
    const employeeData = {
        given_name: data.get('given_name'),
        family_name: data.get('family_name'),
        pin_number: data.get('pin_number'),
        email: data.get('email'),
        password: data.get('password'),
        locality_name: data.get('locality_name'),
        postal_code: data.get('postal_code'),
        street_name: data.get('street_name'),
        street_type: data.get('street_type'),
        house_number: data.get('house_number'),
        user_role: data.get('user_role'),
        phone_number: data.get('phone_number')
    }
    console.log(employeeData)
    const response = await fetch('http://localhost:4000/auth/signup', {
        method: 'POST',
        headers: {
                'Content-Type' : 'application/json',
                'Authorization': 'Bearer ' + token
            },
        body: JSON.stringify(employeeData)
    })
    console.log(response)
    if(!response) {
         throw new Response(JSON.stringify({ message: 'Could not save employees.'}), {status: 500})
    } 

    return redirect('/employees');

}