import UserDatas from "../UserDatas";
import EmployeeList from './EmployeeList';
import { useState } from "react";

/* Itt jelenik meg az összes employee */

const EmployeesPage = () => {

    const [employees] = useState(() => {
       return UserDatas.filter(user => user.role !== 'Customer')});


    return ( 
        <>
            <EmployeeList employees={employees} />
        </>
     );
}
 
export default EmployeesPage;