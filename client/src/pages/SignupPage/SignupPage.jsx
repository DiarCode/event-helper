import React from "react";
import "./signupStyle.css";
import SignupBG from "../../assets/signupBG.png";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="signup">
      <div className="signup-content">
        <div className="signup-main">
          <div className="signup-title">Create account</div>
          <div className="signup-subtitle">Fill out information</div>
          <div className="signup-inputs">
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm password" />
          </div>
          <button className="signup-btn">Sign up</button>
          <div className="signup-footer">
            <span className="signup-acc">Already have an account?</span>
            <Link to="/login" className="signup-signin">Sign in</Link>
          </div>
        </div>
        <div className="signup-photo">
          <img src={SignupBG} alt="sign up background" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
