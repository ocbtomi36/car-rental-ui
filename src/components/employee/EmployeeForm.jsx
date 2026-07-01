import { Form, redirect, useActionData } from "react-router-dom";
import FormInput from "../../shared/FormImput";
import { useState } from "react";
import { getAuthToken } from "../../../util/auth";

const EmployeeForm = ({method,employee}) => {
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
 
export default EmployeeForm;

export async function action({request, params}) {
    const method = request.method;
    const token = getAuthToken();
    
    const data = await request.formData();
    const employeeData = {
        given_name: data.get('given_name'),
        family_name: data.get('family_name'),
        pin_number: data.get('pin_number'),
        email: data.get('email'),
        password: data.get('password'),
        locality_name: data.get('locality_name'),
        postal_code: data.get('postal_code'),
        street_name: data.get('street_name'),
        street_type: data.get('street_type'),
        house_number: data.get('house_number'),
        user_role: data.get('user_role'),
        phone_number: data.get('phone_number')
    }
    const isEmployed = data.get('is_employed');


    let url;

    if(method === "POST") {
        url = 'http://localhost:4000/auth/signup'
    } else if (method === "PUT") {
        const id = params.employeeId;
        url = `http://localhost:4000/users/employee/${id}`
    }
    const response = await fetch(url, {
        method: method,
        headers: {
                'Content-Type' : 'application/json',
                'Authorization': 'Bearer ' + token
            },
        body: JSON.stringify(employeeData)
    })

    if(response.status === 422 || response.status === 409 ) {
        return response;
    }
    if(!response) {
         throw new Response(JSON.stringify({ message: 'Could not save employees.'}), {status: 500})
    } 

    return redirect('/employees');

}