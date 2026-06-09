import PropTypes from 'prop-types'


const VehicleItem = ({item, showVehicle}) => {
    console.log(showVehicle)
    return ( 
        <div className={`card ${showVehicle && 'disabled'}`}>
                <div className="card-name">
                    <p>{item.manufacturer_type}</p>
                    <p>{item.engine_size}</p>
                </div>
                <p>{item.colors_idcolor}</p>
                <p>{item.production_time_idproduction_time}</p>
        </div>
     );
}

VehicleItem.propTypes = {
    item: PropTypes.array.isRequired,
    showEmployee: PropTypes.bool.isRequired
}

export default VehicleItem;