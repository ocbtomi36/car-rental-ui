import { Link } from "react-router-dom";

const EmployeeItem = ({item}) => {
    console.log(typeof item.id);
    return ( 
        <Link className="card" to={String(item.id)}>
            <div className="card-name">
                <p>{item.givenName}</p>
                <p>{item.familyName}</p>
            </div>
            <p>{item.role}</p>
            <p>{item.email}</p>
        </Link>
     );
}


export default EmployeeItem;