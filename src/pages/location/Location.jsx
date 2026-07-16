import LocationList from "../../components/location/LoationList";
import { getAuthToken } from "../../../util/auth"
import { useLoaderData } from "react-router-dom";

const LocationPage = () => {

    const locations = useLoaderData();
    console.log(locations)
    return ( 
        <>
            <LocationList locations={locations}/>
        </>
     );
}
 
export default LocationPage;

export async function loader() {
    const token = getAuthToken();
    const response = await fetch('http://localhost:4000/locations/locations', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
    
    if(!response.ok) {
        throw new Response(JSON.stringify({ message: 'Could not fetch any location'}), {status: 500})
    } else {
        const resData = await response.json();
        return resData.data;
    }
}