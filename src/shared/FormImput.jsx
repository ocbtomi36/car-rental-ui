const FormInput = ({ label, name,placeholder,defaultValue}) => {
    return (  
        <div className="form__input-box">
            <label className="form__details">{label}</label>
            <input type={name === 'password' ? 'password' : name === 'email' ? 'email' : 'text'} className="form__input" name={name} placeholder={placeholder} defaultValue={defaultValue}/>
        </div>

    );
}
 
export default FormInput;