import EmployeeForm from "../../../components/employee/EmployeeForm";
import { useRouteLoaderData } from "react-router-dom";
const EmployeeDetailPage = () => {

    const employee = useRouteLoaderData('employee-detail');

    return ( 

        <>
            <EmployeeForm employee={employee}/>
        </>
     );
}
 
export default EmployeeDetailPage;