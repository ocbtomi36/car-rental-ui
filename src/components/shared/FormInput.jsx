const FormInput = ({label, placeholder}) => {
    return (  
        <div className="form__input-box">
            <span className="form__details">{label}</span>
            <input type="text" className="form__input" placeholder={placeholder} />
        </div>

    );
}
 
export default FormInput;