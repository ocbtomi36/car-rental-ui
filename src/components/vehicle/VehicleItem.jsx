import { Link } from "react-router-dom";
import CardItem from "../../shared/CardItem";
const VehicleItem = ({item}) => {
    const cardData = [
        { label: 'Color:', data: item?.color},
        { label: 'Engine Size:', data: item?.engine_size},
        { label: 'Performance:', data: item?.car_performance},
        { label: 'Engine Size:', data: item?.engine_size},
        { label: 'Fuel', data: item?.fuel}
    ]
    return ( 
        <Link className="card" to={String(item.idcar)}>
            <div className="card__headline">
                <span className="card_headline-text">{item.manufacturer} {item.type}</span>
             </div>
            <ul className="card__list">
               {cardData.map((item) => (
                <CardItem key={item?.vin_number} title={item.label} item={item.data} />
               ))}
            </ul>
        </Link>
     );
}
 
export default VehicleItem;