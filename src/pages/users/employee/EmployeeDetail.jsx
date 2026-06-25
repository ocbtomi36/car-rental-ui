import { useParams, useRouteLoaderData } from "react-router-dom";
import { getAuthToken } from "../../../../util/auth";
import { Link } from "react-router-dom";
import EmployeeNavigation from "../../../components/employee/EmployeeNavigation";
const EmployeeDetailPage = () => {

    const param = useParams();
    const id = param.employeeId;
    const data = useRouteLoaderData('employee-detail');


    return ( 
       <article className="card-detail container">
        <div className="card-detail__header">
            <h2>Personal Datas</h2>
        </div>
        <div className="card-detail__data">
            <div className="card-detail__data-item">
                <h4>Given Name:</h4>
                <p className="card-detail__data-text">{data.given_name}</p>
            </div>
            <div className="card-detail__data-item">
                <h4>Family Name:</h4>        
                <p className="card-detail__data-text">{data.family_name}</p>
            </div>
            <div className="card-detail__data-item">
                <h4>Pin Number:</h4>
                <p className="card-detail__data-text">{data.pin_number}</p>
            </div>
            <div className="card-detail__data-item">
                <h4>Email:</h4>
                <p className="card-detail__data-text">{data.email}</p>
            </div>
            <div className="card-detail__data-item">
                <h4>Locality:</h4>
                <p className="card-detail__data-text">{data.locality_name}</p>
            </div>
            <div className="card-detail__data-item">
                <h4>Postal Code:</h4>
                <p className="card-detail__data-text">{data.postal_code}</p>
            </div>
            <div className="card-detail__data-item">
                <h4>Street Name:</h4>
                <p className="card-detail__data-text">{data.street_name}</p>
            </div>
            <div className="card-detail__data-item">
                <h4>Street Type:</h4>
                <p className="card-detail__data-text">{data.street_type}</p>    
            </div>
            <div className="card-detail__data-item">
                <h4>House Number:</h4>
                <p className="card-detail__data-text">{data.house_number}</p>
            </div>
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
             throw new Response(JSON.stringify({ message: 'Could not fetch details for selected employee.'}), {status: 500})
        } else {
            const resData = await response.json();
            return resData.data;
        }

}