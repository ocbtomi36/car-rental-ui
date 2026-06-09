import PropTypes from "prop-types";

const CustomerItem = ({item, showCustomer}) => {
    return ( 
        <div className={`card ${showCustomer && 'disabled'}`}>
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