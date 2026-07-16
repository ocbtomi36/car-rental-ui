import VehicleItem from "./VehicleItem";

const VehicleList = ({vehicles}) => {

    return ( 
        <>
         <div className='card-container container' >
           {vehicles.map((item) => (
            <VehicleItem key={item.idcar} item={item}/>
           ))}
         </div>
        </>
     );
}
 
export default VehicleList;