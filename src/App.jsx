import Login from "./components/pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/pages/LoginForm";
import MainScreen from "./components/pages/MainScreen"
import Users from "./components/pages/users/Users"
import Cars from "./components/pages/cars/Cars";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/mainscreen" element={<MainScreen/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/cars" element={<Cars/>} />
        </Routes>
      </Router>
    </>
  )
}
 
export default App;
