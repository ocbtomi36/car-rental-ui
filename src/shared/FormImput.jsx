const FormInput = ({ label, placeholder}) => {
    return (  
        <div className="form__input-box">
            <label className="form__details">{label}</label>
            <input type="text" className="form__input" placeholder={placeholder} required/>
        </div>

    );
}
 
export default FormInput;