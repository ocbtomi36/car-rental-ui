import EmployeeItem from "./EmployeeItem";
import PropTypes from "prop-types";

const EmployeeList = ({employees, showEmployee}) => {

    if(!employees || employees.length === 0) {
       return <p className="hint">There is no employee to display</p>
    }
    return ( 
        <div className="card-container container">
            {employees.map((item) => (
                < EmployeeItem  key={item.idcar} item={item} showEmployee={showEmployee}/>
            ))}
        </div>
     );
}

EmployeeList.propType = {
    employees: PropTypes.array.isRequired,
    showEmployee: PropTypes.bool.isRequired
}

export default EmployeeList;