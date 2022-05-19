import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import GoogleLogo from "../../assets/googleLogo.png";
import "./googleLogin.css";

const GoogleLogin = () => {
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies();
  const pageNavigation = useNavigate();

  async function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const googleInfo = await signInWithPopup(auth, provider)
      .then(res => res.user)
      .catch(err => console.log(err));

    const newUser = {
      userName: googleInfo.displayName,
      userEmail: googleInfo.email,
      isAdmin: false,
    };

    const response = await fetch(
      "https://event-helper-server.herokuapp.com/api/login/google",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: newUser }),
      }
    ).then(res => res.json());

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
      alert("Something went wrong. Please try again!");
    }
  }

  return (
    <button className="googleLogin">
      <img src={GoogleLogo} alt="google" />
      <p onClick={loginWithGoogle}>Log in with Google</p>
    </button>
  );
};

export default GoogleLogin;
