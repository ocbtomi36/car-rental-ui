import { Link, useRouteLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getAuthToken } from "../../../../util/auth";
import DetailItem from "../../../components/DetailItem";


const CustomerDetailPage = () => {

    const param = useParams();
    const id = param.customerId;
    const data = useRouteLoaderData('customer-detail')

    const detailItems = [
    { label: 'Given Name', value: data.given_name },
    { label: 'Family Name', value: data.family_name },
    { label: 'Pin Number', value: data.pin_number },
    { label: 'Locality', value: data.locality_name },
    { label: 'Postal Code', value: data.postal_code },
    { label: 'Street Name', value: data.street_name },
    { label: 'Street Type', value: data.street_type },
    { label: 'House Number', value: data.house_number }
];

    return ( 
         <article className="card-detail container">
        <div className="card-detail__header">
            <h2>Customer Datas</h2>
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
 
export default CustomerDetailPage;

export async function loader({request, params}) {

    const id = params.customerId;
    const token = getAuthToken();

    const response = await fetch('http://localhost:4000/users/customer/' + id, {
         headers: {
                'Authorization': 'Bearer ' + token
            }
    }) 
    if(!response.ok) {
             throw new Response(JSON.stringify({ message: 'Could not fetch details for selected customer.'}), {status: 500})
        } else {
            const resData = await response.json();
            return resData.data;
        }


}