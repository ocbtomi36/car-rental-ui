import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './pages/Home';
import EmployeesPage, {loader as employeeLoader} from './pages/users/employee/Employees'
import EmployeeDetailPage, {loader as employeeDetailLoader} from './pages/users/employee/EmployeeDetail'
import EditEmployeePage from './pages/users/employee/EditEmployee'
import NewEmployeePage from "./pages/users/employee/NewEmployee";
import RootLayout from "./pages/Root";
import EmployeeLayout from "./pages/users/employee/EmployeeRoot"
import AuthenticationPage, { action as authAction } from "./pages/Authentication";
import ErrorPage from "./pages/Error";
import {action as manipulateEmployeeAction} from './components/employee/EmployeeForm'
import {action as manipulateCustomerAction} from './components/customer/CustomerForm'
import {action as logoutAction} from './pages/Logout'
import { tokenLoader } from '../util/auth'
import CustomerLayout from "./pages/users/customer/CustomerRoot";
import CustomerPage, {loader as customerLoader} from "./pages/users/customer/Customers";
import CustomerDetailPage, {loader as customerDetailLoader} from "./pages/users/customer/CustomerDetail";
import EditCustomerPage from './pages/users/customer/EditCustomer'
import NewCustomerPage from './pages/users/customer/NewCustomer'
import { element } from "prop-types";

const router = createBrowserRouter([
  { path: '/', 
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: tokenLoader,
    id:'root',
    children: [
      { index: true, element: <HomePage /> },
      {path: 'auth', 
        element: <AuthenticationPage />,
        action: authAction
      },
      {
        path:'logout',
        action:logoutAction
      },
      {
        path:'customers',
        element:<CustomerLayout/>,
        children: [
          {index: true, element: <CustomerPage />, loader: customerLoader },
          {
            path: ':customerId',
            id: 'customer-detail',
            loader: customerDetailLoader,
            children: [
              { index: true, element: <CustomerDetailPage />},
              { path: 'edit', element: <EditCustomerPage />, action: manipulateCustomerAction}
            ]
          },
          {
            path:'new', element: <NewCustomerPage />, action: manipulateCustomerAction
          }
        ]
      },
      { path: 'employees', 
        element: <EmployeeLayout />,
        children: [
        { index: true, element: <EmployeesPage /> , loader: employeeLoader },
        {
          path: ':employeeId',
          loader: employeeDetailLoader,
          id: 'employee-detail',
          children: [
            { index: true, element: <EmployeeDetailPage />},
            { path: 'edit', element: <EditEmployeePage />, action: manipulateEmployeeAction },
          ]
        },
        { path: 'new', element: <NewEmployeePage />, action: manipulateEmployeeAction},
      ]}
    ]
   },
  
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
 
export default App;