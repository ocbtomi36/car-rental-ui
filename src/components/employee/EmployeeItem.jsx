import { Link } from "react-router-dom";
import CardItem from "../../shared/CardItem";
const EmployeeItem = ({item}) => {

    const cardData = [
        { label: 'Position', data: item?.user_role },
        { label: 'E-mail', data: item?.email },
        { label: 'Phone', data: item?.phone_number}
    ]    
    
    return ( 
        <Link className="card" to={String(item.iduser)}>
            <div className="card__headline">
                <span className="card_headline-text">{item.given_name} {item.family_name}</span>
             </div>
            <ul className="card__list">
               {cardData.map((item) => (
                <CardItem title={item.label} item={item.data} />
               ))}
            </ul>
        </Link>
     );
}
export default EmployeeItem;