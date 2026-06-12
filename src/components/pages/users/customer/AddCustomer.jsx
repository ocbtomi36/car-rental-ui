const AddCustomer = ({showAddCustomer}) => {

    return ( 
        <div className={!showAddCustomer ? 'customer-form ' : 'hidden'}>
            <div className="customer-form__title">Customer Registration</div>
            <form className="form" action="">
                <div className="form__user-details">
                    <div className="form__personal-data">
                        <div className="form__headline">
                            Personal Datas
                        </div>
                        <div className="form__input-box">
                            <span className="form__details">Given Name</span>
                            <input type="text" className="form__input" placeholder="Enter your given name" />
                        </div>
                        <div className="form__input-box">
                            <span className="form__details">Family Name</span>
                            <input type="text" className="form__input" placeholder="Enter your family name" />
                        </div>
                        <div className="form__input-box">
                            <span className="form__details">Pin Number</span>
                            <input type="text" className="form__input" placeholder="Enter your pin number" />
                        </div>
                    </div>
                    <div className="form__personal-data">
                         <div className="form__headline">
                            Address
                        </div>
                        <div className="form__input-box">
                            <span className="form__details">Locality</span>
                            <input type="text" className="form__input" placeholder="Enter locality name" />
                        </div>
                        <div className="form__input-box">
                            <span className="form__details">Postal Code</span>
                            <input type="text" className="form__input" placeholder="Enter postal code" />
                        </div>
                        <div className="form__input-box">
                            <span className="form__details">Street Name</span>
                            <input type="text" className="form__input" placeholder="Enter street type" />
                        </div>
                        <div className="form__input-box">
                            <span className="form__details">Street Type</span>
                            <input type="text" className="form__input" placeholder="Enter street type" />
                        </div>
                        <div className="form__input-box">
                            <span className="form__details">House Number</span>
                            <input type="text" className="form__input" placeholder="Enter house number" />
                        </div>
                    </div>
                </div>
                <div className="form__button">
                    <input className="form__button-input" type="submit" value={"Register"}/>
                </div>
            </form> 
        </div>
     );
}
 /*
 
 <div className="form__header container">
                <h2>Registration</h2>
            </div>
            <form className="form container">
                <div className="form__personal-data">
                    <div className="form__title">
                        <h2>Personal Data</h2>
                    </div>
                    <div className="form__item">
                        <label htmlFor="">Given Name</label>
                        <input type="text" placeholder="Given Name"/>
                    </div>
                    <div className="form__item">
                        <label htmlFor="">Family name</label>
                        <input type="text" placeholder="Family Name"/>
                    </div>
                    <div className="form__item">
                        <label htmlFor="">Pin Number</label>
                        <input type="text" placeholder="Pin Number"/>
                    </div>
                </div>
                <div className="form__address">
                    <div className="form__title">
                        <h2>Address</h2>
                    </div>
                    <div className="form__item">
                        <label htmlFor="">Locality</label>
                        <input type="text" placeholder="Locality"/>
                    </div>
                    <div className="form__item">
                        <label htmlFor="">Postal Code</label>
                        <input type="text" placeholder="Postal Code"/>
                    </div>
                    <div className="form__item">
                        <label htmlFor="">Street Name</label>
                        <input type="text" placeholder="Street Name"/>
                    </div>
                    <div className="form__item">
                        <label htmlFor="">Street Type</label>
                        <input type="text" placeholder="Street Type"/>
                    </div>
                    <div className="form__item">
                        <label htmlFor="">House Number</label>
                        <input type="text" placeholder="First Name"/>
                    </div>
                </div>
                <div className="form__button-submit">
                    <button className="form__button-submit" type="submit">Send</button>
                </div>
            </form>
 */
export default AddCustomer;