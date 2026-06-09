import CustomerItem from "./CustomerItem";

const CustomerList = ({customers, showCustomers}) => {
    
    if(!customers || customers.length === 0) {
           return <p className="hint">There is no customer to display</p>
        }
        return ( 
            <div className="card-container container">
                {customers.map((item) => (
                    < CustomerItem  key={item.id} item={item} showCustomer={showCustomers}/>
                ))}
            </div>
         );



}
 
export default CustomerList;