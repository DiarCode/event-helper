import React from "react";
import "./navbar.css";
import Logo from '../../assets/navbarLogo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo"><img src={Logo} alt="logo" /></Link>
        <div className="navbar-nav">
          <Link to="/" className="navbar-link">About</Link>
          <Link to="/events" className="navbar-link">Events</Link>
          <Link to="/advice" className="navbar-link">Advice</Link>
          <Link to="/gallery" className="navbar-link">Gallery</Link>
        </div>
        <div className="navbar-profile">
            <Link to="/login" className="navbar-login">Log in</Link>
            <Link to="/signup" className="navbar-signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
