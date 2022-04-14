import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<SignupPage />} />
    </Routes>
  );
};

export default Routing;
