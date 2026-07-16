import { Form, redirect, useActionData } from "react-router-dom";
import FormInput from "../../shared/FormImput";
import { useState } from "react";
import { getAuthToken } from "../../../util/auth";

const VehicleForm = ({method,vehicle}) => {
    const data = useActionData();
    const [value, setValue] = useState('New Final Rent Car Office');
    let productionTime = vehicle?.manufacturer || '';
    if(productionTime !== '') {
        productionTime = new Date(vehicle?.production_time).toISOString().split('T')[0] || ''
    }
    //  ||  ha a rendszámot nem küldik akkor null, mert a backend azt várja, '
    let technicalValidity = vehicle?.technical_validity || ''
    if(technicalValidity !== '') {
        technicalValidity = new Date(vehicle?.technical_validity).toISOString().split('T')[0];
    }
    function handleSelect(event) {
        setValue(event.target.value);
    }
    const personaFileds = [
        {
            id:1,
            label:'Manufacturer',
            placeholder:'Enter vehicle manufacturer',
            name:'manufacturer',
            value: vehicle?.manufacturer || '',
            isRequired: true
        },
        {
            id:2,
            label:'Type',
            placeholder:'Enter vehicle type',
            name:'type',
            value: vehicle?.type || '',
            isRequired: true
        },
        {
            id:3,
            label:'Vin Number',
            placeholder:'Enter vehicle vin number',
            name:'vin_number',
            value: vehicle?.vin_number || '',
            isRequired: true
        }
    ]
    const addressFileds = [
        {
            id:1,
            label:'Engine Size',
            placeholder:'Enter size of engine in cccm',
            name: 'engine_size',
            value: vehicle?.engine_size || '',
            isRequired: true
        },
        {
            id:2,
            label:'Car Performance',
            placeholder:'Enter vehicle performance',
            name: 'car_performance',
            value: vehicle?.car_performance || '',
            isRequired: true
        },
        {
            id:3,
            label:'Production Time',
            placeholder:'Enter vehicle production time',
            name: 'production_time',
            value: productionTime,
            isRequired: true
        },
        {
            id:4,
            label:'Color',
            placeholder:'Enter vehicle color',
            name: 'color',
            value: vehicle?.color || '',
            isRequired: true
        },
        {
            id:5,
            label:'Body Type',
            placeholder:'Enter type of body',
            name: 'bodytype',
            value: vehicle?.bodytype || '',
            isRequired: true
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
                            Car Datas
                        </div>
                        {personaFileds.map(field => (
                            <FormInput key={field.id} label={field.label} name={field.name} placeholder={field.placeholder} defaultValue={field.value} isRequired={field.isRequired}/>
                        ))}
                            <FormInput label={'Licence Plate'} name={'licence_plate'} placeholder={'Enter licence plate number'}  defaultValue={vehicle?.licence_plate || '' } isRequired={false} />
                            <FormInput label={'Technical Validity'} name={'technical_validity'} placeholder={'Enter date of technical validity'} defaultValue={technicalValidity} isRequired={true}/>
                    </div>
                
                    <div className="form__user-data">
                        <div className="form__headline">
                            Technical Datas
                        </div>
                        {addressFileds.map(field => (
                            <FormInput key={field.id} label={field.label} name={field.name} placeholder={field.placeholder} defaultValue={field.value} isRequired={field.isRequired}/>
                        ))}
                    </div>
                    <div className="form__user-data">
                        <div className="form__headline">
                            Technical Datas
                        </div>
                           <FormInput label={'Fuel'} name={'fuel'} placeholder={'Enter type of fuel'} required defaultValue={vehicle?.fuel || ''} isRequired={true}/>
                        <div className="form__headline">
                            Company 
                        </div>
                        <select name="location_name" className='form__user-role' onChange={handleSelect} value={value}>
                            <option value="New Final Rent Car Office">New Final Rent Car Office</option>
                        </select>
                    </div> 
                </div>
                <div className="form__buttons">
                    <div className="form__button">
                        <input className="form__button-input" type="submit" value={"Submit"}/>
                    </div>
                </div>
            </Form> 
        </div>
     );
}
 
export default VehicleForm;

export async function action({request, params}) {
    const method = request.method;
    const token = getAuthToken();
    
    const data = await request.formData();
    const vehicleData = {
        vin_number: data.get('vin_number'),
        car_performance: data.get('car_performance'),
        engine_size: data.get('engine_size'),
        licence_plate: data.get('licence_plate'),
        technical_validity: data.get('technical_validity'),
        production_time: data.get('production_time'),
        color: data.get('color'),
        bodytype: data.get('bodytype'),
        fuel: data.get('fuel'),
        location_name: data.get('location_name'),
        manufacturer: data.get('manufacturer'),
        type: data.get('type')
    }
    const isEmployed = data.get('is_employed');


    let url;

    if(method === "POST") {
        url = 'http://localhost:4000/cars/car'
    } else if (method === "PUT") {
        const id = params.idcar;
        url = `http://localhost:4000/cars/car/${id}`
    }
    const response = await fetch(url, {
        method: method,
        headers: {
                'Content-Type' : 'application/json',
                'Authorization': 'Bearer ' + token
            },
        body: JSON.stringify(vehicleData)
    })
    console.log(response)
    if(response.status === 422 || response.status === 409 ) {
        return response;
    }
    if(!response) {
         throw new Response(JSON.stringify({ message: 'Could not save vehicles.'}), {status: 500})
    } 

    return redirect('/vehicles');

}