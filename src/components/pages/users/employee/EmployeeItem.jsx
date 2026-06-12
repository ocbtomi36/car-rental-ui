import PropTypes from 'prop-types'


const EmployeeItem = ({item}) => {
    return ( 
        <div className='card'>
                <div className="card-name">
                    <p>{item.givenName}</p>
                    <p>{item.familyName}</p>
                </div>
                <p>{item.role}</p>
                <p>{item.email}</p>
        </div>
     );
}

EmployeeItem.propTypes = {
    item: PropTypes.array.isRequired,
    showEmployee: PropTypes.bool.isRequired
}

export default EmployeeItem;