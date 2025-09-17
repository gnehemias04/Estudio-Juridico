import { Route, Routes } from "react-router";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
