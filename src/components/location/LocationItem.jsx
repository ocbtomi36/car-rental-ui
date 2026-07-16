import { Link } from "react-router-dom";
import CardItem from "../../shared/CardItem";

const LocationItem = ({item}) => {
    const cardData = [
        {label: 'Locality:', data: item?.locality_name},
        {label: 'Phone:', data: item?.phone_number},
    ]
    return ( 
        <>
            <Link className="card" to={String(item.idlocation)}>
                <div className="card__headline">
                    <span className="card_headline-text">{item?.location_name}</span>
                </div>
                <ul className="card__list">
                    {cardData.map((oneItem) => (
                        <CardItem key={item.phone_number} title={oneItem.label} item={oneItem.data}/>
                    ))}
                </ul>
            </Link>
        </>
     );
}
 
export default LocationItem;