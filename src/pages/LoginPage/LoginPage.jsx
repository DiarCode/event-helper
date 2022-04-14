import React from "react";
import { Link } from "react-router-dom";
import LoginBG from "../../assets/loginBG.png";
import "./loginStyle.css";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login-content">
        <div className="login-photo">
          <img src={LoginBG} alt="login background" />
        </div>
        <div className="login-main">
          <div className="login-fields">
            <div className="login-title">Welcome</div>
            <div className="login-subtitle">Login your account</div>
            <div className="login-inputs">
              <input type="text" placeholder="alexander@gmail.com" />
              <input type="password" placeholder="Password" />
            </div>
            <button className="login-btn">Login</button>
          </div>
          <div className="login-footer">
            <span className="login-acc">Don’t have an account?</span>
            <Link to="/signup" className="login-signup">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
