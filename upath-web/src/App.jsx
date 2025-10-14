import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Retrieve from "./pages/Retrieve";
import Auth from "./pages/Auth";
import HomeUser from "./pages/HomeUser";
import Teste from "./pages/Teste";
import HomeAdmin from "./pages/HomeAdmin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/retrieve" element={<Retrieve />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/homeUser" element={<HomeUser />} />
        <Route path="/teste" element={<Teste />} />
        <Route path="/homeAdmin" element={<HomeAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;