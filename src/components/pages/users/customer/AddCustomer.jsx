const AddCustomer = ({showAddCustomer}) => {

    return ( 
        <div className={`form__customer ${showAddCustomer && 'disabled'}`}>
            <h1>Add New Customer</h1>
            <div className="form__container container">
                
            </div>
        </div>
     );
}
 
export default AddCustomer;