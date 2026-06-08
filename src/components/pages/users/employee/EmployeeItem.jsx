import PropTypes from 'prop-types'


const EmployeeItem = ({item, showEmployee}) => {
    return ( 
        <div className={`card ${showEmployee && 'disabled'}`}>
                <div className="card-name">
                    <p>{item.givenName}</p>
                    <p>{item.familyName}</p>
                </div>
                <p>{item.role}</p>
                <p>{item.email}</p>
                <a href="">Details</a>
        </div>
     );
}

EmployeeItem.propTypes = {
    item: PropTypes.node.isRequired,
    showEmployee: PropTypes.bool.isRequired
}

export default EmployeeItem;