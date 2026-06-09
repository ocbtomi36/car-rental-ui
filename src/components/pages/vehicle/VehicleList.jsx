import VehicleItem from "./VehicleItem";

const VehicleList = ({vehicles, showVehicle}) => {
    console.log(showVehicle)
    if(!vehicles || vehicles.length === 0) {
       return <p className="hint">There is no employee to display</p>
    }
    return ( 
        <div className="card-container container">
            {vehicles.map((item) => (
                < VehicleItem  key={item.idcar} item={item} showVehicle={showVehicle}/>
            ))}
        </div>
     );
}
 
export default VehicleList;