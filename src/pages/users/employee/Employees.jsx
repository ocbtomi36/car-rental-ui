import { getAuthToken } from "../../../../util/auth";
import UserDatas from "../UserDatas";
import EmployeeList from '../../../components/employee/EmployeeList';
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import EmployeeNavigation from "../../../components/employee/EmployeeNavigation";

const EmployeesPage = () => {

    const employees = useLoaderData();
    return ( 
        <>
            <EmployeeList employees={employees} />
        </>
     );
}
 
export default EmployeesPage; 

export async function loader() {
    

    try {
        const token = getAuthToken();
        const response = await fetch('http://localhost:4000/users/employees',{
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        console.log(response)
        if(!response.ok) {
            throw new Response(JSON.stringify({ message: 'Could not fetch employees.'}), {status: 500})
        } else {
            const resData = await response.json();
            return resData.data;
        }
    } catch (err) {
       
    }
}
