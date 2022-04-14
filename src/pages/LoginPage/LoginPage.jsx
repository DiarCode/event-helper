import React from "react";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login-content">
        <div className="login-photo"></div>
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
          <span className="login-acc">Don’t have an account?</span>
          <span className="login-signup">Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
