import { Link } from "react-router-dom";

const UserItem = ({item}) => {
    console.log(item)
    return ( 
        <Link className="card" to={String(item.iduser)}>
            <div class="card__headline">
                <span class="card_headline-text">{item.given_name} {item.family_name}</span>
             </div>
            <ul class="card__list">
                <li class="card__list-item">
                    <div class="card__label">
                        <span class="card__label-title">Position:</span>
                        <span class="card__data">{item.user_role}</span>
                    </div>
                </li>
                <li class="card__list-item">
                    <div class="card__label">
                        <span class="card__label-title">E-mail:</span>
                        <span class="card__data">{item.email}</span>
                    </div>
                </li>
                <li class="card__list-item">
                    <div class="card__label">
                        <span class="card__label-title">Tel:</span>
                        <span class="card__data">{item.phone_number}</span>
                    </div>
                </li>
            </ul>
        </Link>
     );
}
export default UserItem;
