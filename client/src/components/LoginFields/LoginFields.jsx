import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

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

    const response = await fetch(process.env.REACT_APP_LOGIN_FETCH_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emailValue, passwordValue }),
    });

    const data = await response.json();

    if (data.user) {
      setCookie(
        process.env.REACT_APP_USER_COOKIES,
        {
          token: data.user,
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
