import PageContent from "../shared/PageContent";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    let title = "An error occured";
    let message = 'Something went wrong';

    if(error.status === 500) {
        message = JSON.parse(error.data).message;
    } 

    if(error.status === 404) {
        title = 'Page Not found';
        message = 'Could not find resource or page'
    }

    return ( 
        <PageContent title={title}>
            <p className="error">{message}</p>
        </PageContent>
    );
}
 
export default ErrorPage;