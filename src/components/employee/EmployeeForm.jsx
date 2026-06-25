import { Form } from "react-router-dom";
import FormInput from "../../shared/FormImput";
import { useState } from "react";

const EmployeeForm = ({employee}) => {

    const [position, setPosition] = useState(employee.user_role);
    console.log(position);
    const personaFileds = [
        {
            id:1,
            label:'Given Name',
            placeholder:'Enter your given name',
            value: employee?.given_name || ''
        },
        {
            id:2,
            label:'Family Name',
            placeholder:'Enter your family name',
            value: employee?.family_name || ''
        },
        {
            id:3,
            label:'Pin Number',
            placeholder:'Enter your pin number',
            value: employee?.pin_number || ''
        },
        {
            id:4,
            label:'Email',
            placeholder:'Enter your email address',
            value: employee?.email || ''
        },
        {
            id:5,
            label:'Password',
            placeholder:'Enter your password',
            value: ''
        },
    ]
    const addressFileds = [
        {
            id:1,
            label:'Locality',
            placeholder:'Enter your locality name',
            value: employee?.locality_name || ''
        },
        {
            id:2,
            label:'Postal Code',
            placeholder:'Enter your postal code',
            value: employee?.postal_code || ''
        },
        {
            id:3,
            label:'Street Name',
            placeholder:'Enter your street name',
            value: employee?.street_name || ''
        },
        {
            id:4,
            label:'Street Type',
            placeholder:'Enter street type',
            value: employee?.street_type || ''
        },
        {
            id:5,
            label:'House Number',
            placeholder:'Enter your house number',
            value: employee?.house_number || ''
        },
    ]


    return ( 
        <div className='user-form '>
            <div className="user-form__title"></div>
            <Form className="form" action="">
                <div className="form__user-details">
                    <div className="form__user-data">
                        <div className="form__headline">
                            Personal Datas
                        </div>
                        {personaFileds.map(field => (
                            <FormInput key={field.id} label={field.label} placeholder={field.placeholder} defaultValue={field.value}/>
                        ))}
                    </div>
                
                    <div className="form__user-data">
                        <div className="form__headline">
                            Address
                        </div>
                        {addressFileds.map(field => (
                            <FormInput key={field.id} label={field.label} placeholder={field.placeholder} defaultValue={field.value}/>
                        ))}
                    </div>
                    <div className="form__user-data">
                        <div className="form__headline">
                            Position 
                        </div>
                        <select className='form__user-role' value={position} >
                            <option value="employee">Employee</option>
                            <option value="manager">Manager</option>
                            <option value="admin" >Admin</option>
                        </select>
                    </div> 
                </div>
                <div className="form__button">
                    <input className="form__button-input" type="submit" value={"Send"}/>
                </div>
            </Form> 
        </div>
     );
}
 
export default EmployeeForm;