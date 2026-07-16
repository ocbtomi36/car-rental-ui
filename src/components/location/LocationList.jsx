import LocationItem from "./LocationItem"

const LocationList = ({locations}) => {
    
    return ( 
        <>
            <div className='card-container container' >
                {locations.map((item) => (
                    <LocationItem key={item.idlocation} item={item}/>
                ))}
         </div>
        </>
     );
}
 
export default LocationList;