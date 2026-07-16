import { Link } from "react-router-dom";
import CardItem from "../../shared/CardItem";

const CustomerItem = ({item}) => {

    console.log(item)
    const cardData = [
        { label: 'Pin Number:', data: item?.pin_number},
        { label: 'Phone:', data: item?.phone_number}
    ]   

    return ( 
        <Link className="card" to={String(item.iduser)}>
            <div class="card__headline">
                <span class="card_headline-text">{item.given_name} {item.family_name}</span>
             </div>
            <ul class="card__list">
                 {cardData.map((item) => (
                <CardItem title={item.label} item={item.data} />
               ))}
            </ul>
        </Link>
     );
}
export default CustomerItem;
