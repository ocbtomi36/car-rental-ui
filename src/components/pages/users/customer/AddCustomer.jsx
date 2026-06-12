import Form from "../../../shared/Form";
import FormInput from "../../../shared/FormInput";
const AddCustomer = ({showAddForm}) => {
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

    const title = "Customer Registration"

    return ( 
            <Form showAddForm={showAddForm} title={title}>
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
                        <FormInput id={field.id} label={field.label} placeholder={field.placeholder} />
                    ))}
                </div>
            </Form>  
     );
}

export default AddCustomer;