import { useLoaderData } from "react-router-dom";
import { getAuthToken } from "../../../../util/auth";
import UserList from "../../../components/UserList"

const CustomerPage = () => {

    const entity = 'customer'
    const users = useLoaderData();
    console.log(users)

    return ( 
        <>
            <UserList entity={entity} users={users}/>
        </>
     );
}
 
export default CustomerPage;

export async function loader() {
    const token = getAuthToken();
    const response = await fetch('http://localhost:4000/users/customers',{
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
}