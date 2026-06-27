import EmployeeItem from './EmployeeItem';


const EmployeeList = ({users, entity}) => {

     if(!users || users.length === 0) {
       return <p className="hint">There is no {entity} to display</p>
    }
    return ( 
        <div className='card-container container' >
            {users.map((item) => (
                < EmployeeItem  key={item.iduser} item={item} />
            ))}
        </div>
     );
}
 
export default EmployeeList;