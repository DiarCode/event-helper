import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { loginAccountService } from "../Helpers/userHelperMethods";

const LoginFields = () => {
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies();
  const emailRef = useRef();
  const passwordRef = useRef();
  const pageNavigation = useNavigate();

  async function loginAccount(event) {
    event.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    const response = await loginAccountService(emailValue, passwordValue);

    if (response.user) {
      setCookie(
        process.env.REACT_APP_USER_COOKIES,
        {
          token: response.user,
          isAuth: true,
        },
        { maxAge: process.env.REACT_APP_USER_COOKIES_MAX_AGE }
      );
      pageNavigation("../");
    } else {
      alert("Please check your email and password");
    }
  }

  return (
    <div className="login-fields">
      <div className="login-title">Welcome</div>
      <div className="login-subtitle">Login your account</div>
      <div className="login-inputs">
        <input type="text" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
      </div>
      <button className="login-btn" onClick={loginAccount}>
        Login
      </button>
    </div>
  );
};

export default LoginFields;
