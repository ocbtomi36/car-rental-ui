import VehicleList from "../../components/vehicle/VehicleList";
import { getAuthToken } from "../../../util/auth";
import { useLoaderData } from "react-router-dom";

const VehiclePage = () => {

    const entity = 'vehicle'
    const vehicles = useLoaderData();

    return ( 
        <>
          <VehicleList vehicles={vehicles}/>
        </>
     );
}
 
export default VehiclePage;

export async function loader() {

        const token = getAuthToken();
        const response = await fetch('http://localhost:4000/cars/cars/available',{
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        if(!response.ok) {
            throw new Response(JSON.stringify({ message: 'Could not fetch any vechicle.'}), {status: 500})
        } else {
            const resData = await response.json();
            return resData.data;
        }
}