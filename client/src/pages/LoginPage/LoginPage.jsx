import React from "react";
import { Link } from "react-router-dom";
import LoginBG from "../../assets/loginBG.png";
import LoginFields from "../../components/LoginFields/LoginFields";
import "./loginStyle.css";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login-content">
        <div className="login-photo">
          <img src={LoginBG} alt="login background" />
        </div>
        <div className="login-main">
          <LoginFields />
          <div className="login-footer">
            <span className="login-acc">Don’t have an account?</span>
            <Link to="/signup" className="login-signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
