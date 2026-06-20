import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './pages/Home';
import EmployeesPage from './pages/users/employee/Employees'
import EmployeeDetailPage from './pages/users/employee/EmployeeDetail'
import EditEmployeePage from './pages/users/employee/EditEmployee'
import NewEmployeePage from "./pages/users/employee/NewEmployee";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  { path: '/', element: <RootLayout />, 
    children: [
      { index: true, element: <HomePage /> },
      { path: 'employees', element: <EmployeesPage /> },
      { path: 'employees/:employeeId', element: <EmployeeDetailPage /> },
      { path: 'employees/new', element: <NewEmployeePage /> },
      { path: 'employees/:employeeId/edit', element: <EditEmployeePage /> },
    ]
   },
  
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
 
export default App;