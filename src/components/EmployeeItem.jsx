import { Link } from "react-router-dom";

const EmployeeItem = ({item}) => {
    return ( 
        <Link className="card" to={String(item.iduser)}>
            <div className="card-name">
                <p>{item.given_name}</p>
                <p>{item.family_name}</p>
            </div>
            <p>{item.user_role}</p>
            <p>{item.email}</p>
        </Link>
     );
}


export default EmployeeItem;