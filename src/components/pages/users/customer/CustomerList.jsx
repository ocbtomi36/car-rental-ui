import CustomerItem from "./CustomerItem";
import PropTypes from "prop-types";

const CustomerList = ({customers, showCustomers}) => {
    
    if(!customers || customers.length === 0) {
           return <p className="hint">There is no customer to display</p>
        }
        return ( 
            <div className={!showCustomers ? "card-container container" : "hidden"}>
                {customers.map((item) => (
                    < CustomerItem  key={item.id} item={item}/>
                ))}
            </div>
         );
}
 
CustomerList.propTypes = {
    customers: PropTypes.array.isRequired,
    showCustomers: PropTypes.bool.isRequired
} 

export default CustomerList;