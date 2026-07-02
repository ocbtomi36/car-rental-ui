import VehicleItem from "./VehilcleItem";

const VehicleList = ({vehicles}) => {
    return ( 
        <>
           {vehicles.map((vehicle) => (
            <VehicleItem key={vehicle.idcar} vehicle={vehicle}/>
           ))}
        </>
     );
}
 
export default VehicleList;