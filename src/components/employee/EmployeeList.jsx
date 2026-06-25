import EmployeeItem from './EmployeeItem';


const EmployeeList = ({employees}) => {

     if(!employees || employees.length === 0) {
       return <p className="hint">There is no employee to display</p>
    }

    return ( 
        <div className='card-container container' >
            {employees.map((item) => (
                < EmployeeItem  key={item.iduser} item={item} />
            ))}
        </div>
     );
}
 
export default EmployeeList;