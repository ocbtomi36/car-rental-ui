import { getAuthToken } from "../../../../util/auth";
import UserDatas from "../UserDatas";
import UserList from "../../../components/UserList"
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import EmployeeNavigation from "../../../components/SubNavigation";

const EmployeesPage = () => {

    const users = useLoaderData();
    const entity = 'employee'
    return ( 
        <>
            <UserList users={users} entity={entity}/>
        </>
     );
}
 
export default EmployeesPage; 

export async function loader() {

        const token = getAuthToken();
        const response = await fetch('http://localhost:4000/users/employees',{
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        
        if(!response.ok) {
            throw new Response(JSON.stringify({ message: 'Could not fetch employees.'}), {status: 500})
        } else {
            const resData = await response.json();
            return resData.data;
        }
}
