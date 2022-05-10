import React, { useState } from "react";
import "./navbar.css";
import BurgerMenuOpen from "../../assets/burgerMenu.svg";
import BurgerMenuClose from "../../assets/burgerMenuClose.svg";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import UserIcon from "../../assets/userIcon.png";
import ProfileModal from "../ProfileModal/ProfileModal";

const Navbar = () => {
  const isAuth = useAuth();
  const [isModalActive, setIsModalActive] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);

  function handleBurger() {
    return burgerMenu ? "navbar-burger" : "navbar-navigation";
  }

  function handleUser() {
    return !isAuth ? (
      <div className="navbar-account">
        <Link to="/login" className="navbar-login">
          Log in
        </Link>
        <Link to="/signup" className="navbar-signup">
          Sign up
        </Link>
      </div>
    ) : (
      <div className="navbar-icon">
        <button className="navbar-icon-btn" onClick={handleProfileBtn}>
          <img src={UserIcon} alt="user" />
        </button>
      </div>
    );
  }

  function handleProfileBtn() {
    setIsModalActive(!isModalActive);
  }

  function handleBurgerBtn() {
    if (isModalActive) setIsModalActive(!isModalActive);
    setBurgerMenu(!burgerMenu);
  }

  return (
    <div className="navbar">
      <div className="navbar-content">

        <Link to="/" className="navbar-logo">
          Event-Helper
        </Link>

        <div className={handleBurger()}>
          <Link to="/" className="navbar-link">
            About
          </Link>
          <Link to="/events" className="navbar-link">
            Events
          </Link>
          <Link to="/advice" className="navbar-link">
            Advice
          </Link>
          <Link to="/gallery" className="navbar-link">
            Gallery
          </Link>
        </div>

        {handleUser()}
        <ProfileModal isActive={isModalActive} setIsActive={setIsModalActive} />

        <div className="navbar-burger-open" onClick={handleBurgerBtn}>
          <img src={burgerMenu ? BurgerMenuClose : BurgerMenuOpen} alt="menu" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
