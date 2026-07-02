const VehicleItem = ({vehicle}) => {
    return ( 
        <>
            <div className="card-container">
                
            </div>
        </>
     );
}
 
export default VehicleItem;


/*

<div className="car-card">
                    <p>{vehicle.manufacturer}</p>
                    <p>{vehicle.type}</p>
                    <p>Production time: {new Date(vehicle.production_time).toLocaleDateString('en-EN')}</p>
                    <p>Performance:{vehicle.car_performance} Hp</p>
                    <p>Color: {vehicle.color}</p>
                    <p>Type of Body: {vehicle.bodytype}</p>
                    <p>Type of Fuel: {vehicle.fuel}</p>
                </div>
.car-card {
    background-color: #101918;
    color: var(--dark-primary-color);
    width: 500px;
    height: 300px;
    border: 1px solid var(--dark-secondary-color);
    border-radius: 5px;
    text-align: center;
    margin-top: 2rem;
}


*/