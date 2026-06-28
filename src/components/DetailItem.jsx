

const DetailItem = ({label,data}) => {
    return ( 
        <div className="card-detail__data-item">
            <h4>{label}</h4>
            <p className="card-detail__data-text">{data}</p>
        </div>
     );
}
 
export default DetailItem;