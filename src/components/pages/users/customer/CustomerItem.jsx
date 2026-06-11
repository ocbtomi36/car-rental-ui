import PropTypes from "prop-types";

const CustomerItem = ({item}) => {
    return ( 
        <div className="card">
                <div className="card-name">
                    <p>{item.givenName}</p>
                    <p>{item.familyName}</p>
                </div>
                <p>{item.role}</p>
                <p>{item.email}</p>
        </div>
     );
}

CustomerItem.propTypes = {
    item: PropTypes.array.isRequired,
    showEmployee: PropTypes.bool.isRequired
}

export default CustomerItem;