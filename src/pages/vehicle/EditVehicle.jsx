import { useRouteLoaderData } from 'react-router-dom';
import VehicleForm from '../../components/vehicle/VehicleForm'

const EditVehiclePage = () => {

    const vehicle = useRouteLoaderData('vehicle-detail');
    return ( 
        <VehicleForm method={"PUT"} vehicle={vehicle}/>
     );
}
 
export default EditVehiclePage;