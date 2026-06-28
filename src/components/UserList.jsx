import UserItem from './UserItem';


const UserList = ({users, entity}) => {

     if(!users || users.length === 0) {
       return <p className="hint">There is no {entity} to display</p>
    }
    return ( 
        <div className='card-container container' >
            {users.map((item) => (
                < UserItem  key={item.iduser} item={item} />
            ))}
        </div>
     );
}
 
export default UserList;