const Form = ({showAddForm, children, title }) => {
    return ( 
        <div className={!showAddForm ? 'customer-form ' : 'hidden'}>
            <div className="customer-form__title">{title}</div>
            <form className="form" action="">
                <div className="form__user-details">
                    { children }
                </div>
                <span className="form__details form__span-color">Position</span>
                <select className={title !== 'Employee Registration' ? 'disabled' : 'form__user-role'}>
                    <option value="1">Employee</option>
                    <option value="2">Manager</option>
                    <option value="3">Admin</option>
                </select>
                <div className="form__button">
                    <input className="form__button-input" type="submit" value={"Send"}/>
                </div>
            </form> 
        </div>
     );
}
 
export default Form;