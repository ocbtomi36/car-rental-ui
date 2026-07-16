import { useEffect, useState } from "react";
import { getAuthToken } from "../../../util/auth";
import DetailItem from "../../components/DetailItem";
import { Link, useParams, useRouteLoaderData } from "react-router-dom";

const VehicleDetailPage = () => {
    const param = useParams();
    const id = param.idcar;
    const data = useRouteLoaderData('vehicle-detail');
    const [productionTime, setProductionTime] = useState();
    const detailItems = [
    { label: 'Modell', value: data.manufacturer},
    { label: 'Type', value: data.type },
    { label: 'Production Time', value: new Date(data.production_time).toLocaleDateString('en-US')},
    { label: 'Color', value: data.color },
    { label: 'Body Type', value: data.bodytype },
    { label: 'Technical Validity', value: new Date(data.technical_validity).toLocaleDateString('en-US')},
    { label: 'Performace', value: data.car_performance + ' HP'},
    { label: 'Status', value: data.status},
    ];

    return ( 
        <article className="card-detail container">
            <div className="card-detail__header">
                <h2>Vehicle Details</h2>
            </div>
            <div className="card-detail__data">
                
                {detailItems.map((item) => (
                    <DetailItem key={item.label} label={item.label} data={item.value}/>
                ))}
                
            </div>
            <Link to="edit" className="card-detail__btn btn"><p>Edit</p></Link>
       </article>
     );
}
 
export default VehicleDetailPage;

export async function loader({request, params}) {
    const id = params.idcar;
    const token = getAuthToken();

    const response = await fetch('http://localhost:4000/cars/car/' + id, {
        headers: {
                'Authorization': 'Bearer ' + token
         }
    });
    if(!response.ok) {
             throw new Response(JSON.stringify({ message: 'Could not a fetch details for selected vehicles.'}), {status: 500})
        } else {
            const resData = await response.json();
            return resData.data;
        }

}