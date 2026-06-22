import { useParams } from "react-router-dom";
//import classes from './EmployeeDetail.module.css';
import { Link } from "react-router-dom";
const EmployeeDetailPage = () => {

    const param = useParams();
    const id = param.employeeId;
    console.log(id)



    return ( 
        
       <article className="card-detail container">
        <div className="card-detail__header">
            <h2>Personal Datas</h2>
        </div>
        <div className="card-detail__data">
            <div className="card-detail__data-item">
                <h4>Given Name:</h4>
                <p>Béla</p>
            </div>
            <div className="card-detail__data-item">
                <h4>Family Name:</h4>        
                <p>Kiss</p>
            </div>
            <div className="card-detail__data-item">
                <h4>Pin Number:</h4>
                <p>Valami</p>
            </div>
            <div className="card-detail__data-item">
                <h4>Email:</h4>
                <p>nincs@nincs.hu</p>
            </div>
            <div className="card-detail__data-item">
                <h4>Locality:</h4>
                <p>Budapest</p>
            </div>
            <div className="card-detail__data-item">
                <h4>Postal Code:</h4>
                <p>1046</p>
            </div>
            <div className="card-detail__data-item">
                <h4>Street Name:</h4>
                <p>Nádasdy </p>
            </div>
            <div className="card-detail__data-item">
                <h4>Street Type:</h4>
                <p>utca</p>    
            </div>
            <div className="card-detail__data-item">
                <h4>House Number:</h4>
                <p>38</p>
            </div>
        </div>
        <Link to="edit" className="card-detail__btn btn"><p>Edit</p></Link>
       </article>
     );
}
 
export default EmployeeDetailPage;