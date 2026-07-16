const CardItem = ({title, item}) => {
    return ( 
        <li className="card__list-item">
            <div className="card__label">
                <span className="card__label-title">{title}</span>
                <span className="card__data">{item}</span>
            </div>
        </li>
     );
}
 
export default CardItem;