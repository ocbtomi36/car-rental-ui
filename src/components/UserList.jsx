import EmployeeItem from './employee/EmployeeItem';
import CustomerItem from './customer/CustomerItem'

const UserList = ({users, entity}) => {


     if(!users || users.length === 0) {
       return <p className="hint">There is no {entity} to display</p>
    }
    return ( 
        <>
        {entity === 'employee' ? 
        <div className='card-container container' >
            {users.map((item) => (
                < EmployeeItem  key={item.iduser} item={item} />
            ))}
        </div> : 
        <div className='card-container container' >
            {users.map((item) => (
                < CustomerItem  key={item.iduser} item={item} />
            ))}
        </div>
        }
        </>
     );
}
 
export default UserList;