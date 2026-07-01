import CustomerForm from "../../../components/customer/CustomerForm";
import { useRouteLoaderData } from "react-router-dom";
const CustomerDetailPage = () => {

    const customer = useRouteLoaderData('customer-detail');

    return ( 

        <>
            <CustomerForm method="PUT" customer={customer}/>
        </>
     );
}
 
export default CustomerDetailPage;