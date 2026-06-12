const Form = ({showAddCustomer, children }) => {
    return ( 
        <div className={!showAddCustomer ? 'customer-form ' : 'hidden'}>
            <div className="customer-form__title">Customer Registration</div>
            <form className="form" action="">
                <div className="form__user-details">
                    { children }
                </div>
                <div className="form__button">
                    <input className="form__button-input" type="submit" value={"Register"}/>
                </div>
            </form> 
        </div>
     );
}
 
export default Form;