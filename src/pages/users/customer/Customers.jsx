import UserList from "../../../components/UserList"

const CustomerPage = () => {

    const entity = 'users'

    return ( 
        <>
            <UserList entity={entity}/>
        </>
     );
}
 
export default CustomerPage;