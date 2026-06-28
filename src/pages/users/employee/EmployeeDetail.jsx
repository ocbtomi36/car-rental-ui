import { useParams, useRouteLoaderData } from "react-router-dom";
import { getAuthToken } from "../../../../util/auth";
import { Link } from "react-router-dom";
import EmployeeNavigation from "../../../components/SubNavigation";
import DetailItem from "../../../components/DetailItem";
const EmployeeDetailPage = () => {

    const param = useParams();
    const id = param.employeeId;
    const data = useRouteLoaderData('employee-detail');

    const detailItems = [
    { label: 'Given Name', value: data.given_name},
    { label: 'Family Name', value: data.family_name },
    { label: 'Pin Number', value: data.pin_number },
    { label: 'Email', value: data.email },
    { label: 'Is Employed', value: data.is_employed },
    { label: 'Locality', value: data.locality_name },
    { label: 'Postal Code', value: data.postal_code },
    { label: 'Street Name', value: data.street_name },
    { label: 'Street Type', value: data.street_type },
    { label: 'House Number', value: data.house_number }
    ];


    return ( 
       <article className="card-detail container">
        <div className="card-detail__header">
            <h2>Personal Datas</h2>
        </div>
        <div className="card-detail__data">
            
            {detailItems.map((item) => (
                <DetailItem label={item.label} data={item.value}/>
            ))}
            
        </div>
        <Link to="edit" className="card-detail__btn btn"><p>Edit</p></Link>
       </article>
     );
}
 
export default EmployeeDetailPage;

export async function loader({request, params}) {

    const id = params.employeeId;
    const token = getAuthToken();
    const response = await fetch("http://localhost:4000/users/employee/" + id,{
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        if(!response.ok) {
             throw new Response(JSON.stringify({ message: 'Could not a fetch details for selected employee.'}), {status: 500})
        } else {
            const resData = await response.json();
            return resData.data;
        }

}