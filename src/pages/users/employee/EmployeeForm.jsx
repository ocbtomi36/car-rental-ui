import FormInput from "../../../shared/FormImput";

const EmployeeForm = () => {

    const personaFileds = [
        {
            id:1,
            label:'Given Name',
            placeholder:'Enter your given name'
        },
        {
            id:2,
            label:'Family Name',
            placeholder:'Enter your family name'
        },
        {
            id:3,
            label:'Pin Number',
            placeholder:'Enter your pin number'
        },
        {
            id:4,
            label:'Email',
            placeholder:'Enter your email address'
        },
        {
            id:5,
            label:'Password',
            placeholder:'Enter your password'
        },
    ]
    const addressFileds = [
        {
            id:1,
            label:'Locality',
            placeholder:'Enter your locality name'
        },
        {
            id:2,
            label:'Postal Code',
            placeholder:'Enter your postal code'
        },
        {
            id:3,
            label:'Street Name',
            placeholder:'Enter your street name'
        },
        {
            id:4,
            label:'Street Type',
            placeholder:'Enter street type'
        },
        {
            id:5,
            label:'House Number',
            placeholder:'Enter your house number'
        },
    ]


    return ( 
        <div className='customer-form '>
            <div className="customer-form__title"></div>
            <form className="form" action="">
                <div className="form__user-details">
                    <div className="form__personal-data">
                    <div className="form__headline">
                        Personal Datas
                    </div>
                    {personaFileds.map(field => (
                        <FormInput key={field.id} label={field.label} placeholder={field.placeholder}/>
                    ))}
                </div>
                
                <div className="form__personal-data">
                    <div className="form__headline">
                        Address
                    </div>
                    {addressFileds.map(field => (
                        <FormInput key={field.id} label={field.label} placeholder={field.placeholder} />
                    ))}
                </div> 
                </div>
                <span className="form__details form__span-color">Position</span>
                <select className='form__user-role'>
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
 
export default EmployeeForm;