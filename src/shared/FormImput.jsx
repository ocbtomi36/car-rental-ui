const FormInput = ({ label, placeholder,defaultValue}) => {
    return (  
        <div className="form__input-box">
            <label className="form__details">{label}</label>
            <input type="text" className="form__input" placeholder={placeholder} required defaultValue={defaultValue}/>
        </div>

    );
}
 
export default FormInput;