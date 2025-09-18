import { Route, Routes } from "react-router";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import Register from "./Pages/Register";
import Customer from "./Pages/Customer";
import Details from "./Pages/Details";

function App() {
  return (
    <>
      <Routes>
        {/* Rutas Publicas */}
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />

        {/* Rutas Privadas */}
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Customer" element={<Customer />}></Route>
        <Route path="/Details" element={<Details />}></Route>
      </Routes>
    </>
  );
}

export default App;
