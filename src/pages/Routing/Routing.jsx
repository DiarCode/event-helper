import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../AboutPage/AboutPage";
import EventsPage from "../EventsPage/EventsPage";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/events" element={<EventsPage />} />
    </Routes>
  );
};

export default Routing;
