import { Form, redirect, useActionData } from "react-router-dom";
import { useState } from "react";
import FormInput from "../../shared/FormImput";
import { getAuthToken } from "../../../util/auth";
const CustomerForm = ({method, customer}) => {
    console.log(method);
    console.log(customer);
    console.log('Tomi')
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
            value: customer?.given_name || ''
        },
        {
            id:2,
            label:'Family Name',
            placeholder:'Enter your family name',
            name:'family_name',
            value: customer?.family_name || ''
        },
        {
            id:3,
            label:'Pin Number',
            placeholder:'Enter your pin number',
            name:'pin_number',
            value: customer?.pin_number || ''
        },
        {
            id:4,
            label:'Phone Number',
            placeholder:'Enter your phone number',
            name:'phone_number',
            value: customer?.phone_number || ''
        }
    ]
    const addressFileds = [
        {
            id:1,
            label:'Locality',
            placeholder:'Enter your locality name',
            name: 'locality_name',
            value: customer?.locality_name || ''
        },
        {
            id:2,
            label:'Postal Code',
            placeholder:'Enter your postal code',
            name: 'postal_code',
            value: customer?.postal_code || ''
        },
        {
            id:3,
            label:'Street Name',
            placeholder:'Enter your street name',
            name: 'street_name',
            value: customer?.street_name || ''
        },
        {
            id:4,
            label:'Street Type',
            placeholder:'Enter street type',
            name: 'street_type',
            value: customer?.street_type || ''
        },
        {
            id:5,
            label:'House Number',
            placeholder:'Enter your house number',
            name: 'house_number',
            value: customer?.house_number || ''
        },
    ]
    
    return ( 
         <div className='user-form--customer'>
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
                            Customer Datas
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
                </div>
                <div className="form__buttons">
                    <div className="form__button">
                        <input className="form__button-input" type="submit" value={"Send"}/>
                    </div>
                </div>
            </Form> 
        </div>
     );
}
 
export default CustomerForm;