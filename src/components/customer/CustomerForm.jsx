import { Form, redirect, useActionData } from "react-router-dom";
import { useState } from "react";
import FormInput from "../../shared/FormImput";
import { getAuthToken } from "../../../util/auth";
const CustomerForm = () => {
    
    const data = useActionData();
    const [value, setValue] = useState('admin');
    function handleSelect(event) {
        setValue(event.target.value);
    }
    const personaFileds = [
        {
            id:1,
            label:'Given Name',
            placeholder:'Enter your given name',
            name:'given_name',
            value: employee?.given_name || ''
        },
        {
            id:2,
            label:'Family Name',
            placeholder:'Enter your family name',
            name:'family_name',
            value: employee?.family_name || ''
        },
        {
            id:3,
            label:'Pin Number',
            placeholder:'Enter your pin number',
            name:'pin_number',
            value: employee?.pin_number || ''
        },
        {
            id:4,
            label:'Email',
            placeholder:'Enter your email address',
            name:'email',
            value: employee?.email || ''
        },
        {
            id:5,
            label:'Password',
            placeholder:'Enter your password',
            name: 'password',
            value: ''
        },
    ]
    const addressFileds = [
        {
            id:1,
            label:'Locality',
            placeholder:'Enter your locality name',
            name: 'locality_name',
            value: employee?.locality_name || ''
        },
        {
            id:2,
            label:'Postal Code',
            placeholder:'Enter your postal code',
            name: 'postal_code',
            value: employee?.postal_code || ''
        },
        {
            id:3,
            label:'Street Name',
            placeholder:'Enter your street name',
            name: 'street_name',
            value: employee?.street_name || ''
        },
        {
            id:4,
            label:'Street Type',
            placeholder:'Enter street type',
            name: 'street_type',
            value: employee?.street_type || ''
        },
        {
            id:5,
            label:'House Number',
            placeholder:'Enter your house number',
            name: 'house_number',
            value: employee?.house_number || ''
        },
    ]
    
    
    
    
    
    
    
    
    
    
    
    
    
    return ( 
         <div className='user-form '>
            <div className="user-form__title"></div>
            <Form className="form" method={method}>
                {data && data.data && <ul>
                   {Object.values(data.data).map(msg => <li key={msg.msg} className="warning">{msg.msg}</li>)}
                    </ul>}
                {data && data.message && 
                <h2 className="warning-red">{data.message}</h2>}
                <div className="form__user-details">
                    <div className="form__user-data">
                        <div className="form__headline">
                            Personal Datas
                        </div>
                        {personaFileds.map(field => (
                            <FormInput key={field.id} label={field.label} name={field.name} placeholder={field.placeholder} defaultValue={field.value}/>
                        ))}
                    </div>
                
                    <div className="form__user-data">
                        <div className="form__headline">
                            Address
                        </div>
                        {addressFileds.map(field => (
                            <FormInput key={field.id} label={field.label} name={field.name} placeholder={field.placeholder} defaultValue={field.value}/>
                        ))}
                    </div>
                    <div className="form__user-data">
                        <div className="form__headline">
                            Position 
                        </div>
                        <select name="user_role" className='form__user-role' onChange={handleSelect} value={value}>
                            <option value="employee">Employee</option>
                            <option value="manager">Manager</option>
                            <option value="admin" >Admin</option>
                        </select>
                            <FormInput label={'Phone Number'} name={'phone_number'} placeholder={'Enter your phone number'} required defaultValue={employee?.phone_number || ''}/>
                    </div> 
                </div>
                <div className="form__buttons">
                    <div className="form__button">
                        <input className="form__button-input" type="submit" value={"Submit"}/>
                    </div>
                    <div className="form__button">
                        <input className="form__button-input" type="submit" value={"Reactivate"}/>
                    </div>
                </div>
            </Form> 
        </div>
     );
}
 
export default CustomerForm;