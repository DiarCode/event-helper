import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SignupFields = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const pageNavigation = useNavigate();

  async function registerAccount(event) {
    event.preventDefault();
    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    const confirmPasswordValue = confirmPasswordRef.current.value;

    if (passwordValue === confirmPasswordValue) {
      const response = await fetch(process.env.REACT_APP_REGISTER_FETCH_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nameValue, emailValue, passwordValue }),
      });

      const data = await response.json();

      if (data.status === "OK") {
        pageNavigation("../login");
      } else {
        alert(data.error);
      }
    }
  }

  return (
    <form className="signup-fields" onSubmit={registerAccount}>
      <div className="signup-inputs">
        <input type="text" placeholder="Full name" ref={nameRef} />
        <input type="text" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <input
          type="password"
          placeholder="Confirm password"
          ref={confirmPasswordRef}
        />
      </div>
      <button className="signup-btn" type="submit">
        Sign up
      </button>
    </form>
  );
};

export default SignupFields;
