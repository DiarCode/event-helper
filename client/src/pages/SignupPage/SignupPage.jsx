import React from "react";
import "./signupStyle.css";
import SignupBG from "../../assets/signupBG.png";
import { Link } from "react-router-dom";
import SignupFields from "../../components/SignupFields/SignupFields";
import Navbar from "../../components/Navbar/Navbar";

const SignupPage = () => {
  return (
    <div className="signup">
      <Navbar/>
      <div className="signup-content">
        <div className="signup-main">
          <div className="signup-title">Create account</div>
          <div className="signup-subtitle">Fill out information</div>
          <SignupFields />
          <div className="signup-footer">
            <span className="signup-acc">Already have an account?</span>
            <Link to="/login" className="signup-signin">
              Sign in
            </Link>
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
