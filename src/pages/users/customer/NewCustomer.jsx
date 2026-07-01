import CustomerForm from "../../../components/customer/CustomerForm";

const NewCustomerPage = () => {
    return ( 
        <>
            <CustomerForm method={"POST"} />
        </>
     );
}
 
export default NewCustomerPage;