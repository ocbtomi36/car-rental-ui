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

const router = createBrowserRouter([
  { path: '/', 
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {path: 'auth', 
        element: <AuthenticationPage />,
        action: authAction
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