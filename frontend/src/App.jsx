import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./Component/Navbar";
import HomePage from "./Component/HomePage";
import Login from "./Component/Login";
import Register from "./Component/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
