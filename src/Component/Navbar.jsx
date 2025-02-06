import React from "react";
import { Link } from "react-router-dom";
import "../StyleComponent/Navbar.css";
import IRCTCLogo from "../assets/Logo.png";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <div className="logo">
          <Link to="/home"><img src={IRCTCLogo} alt="IRCTC Logo" className="logo" /></Link>
          
          </div>
        </div>
        <div className="navbar-links">
          <Link to="/home" className="nav-link">HomePage</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link">Register</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
