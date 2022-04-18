import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../AboutPage/AboutPage";
import AdvicePage from "../AdvicePage/AdvicePage";
import CreateNewEventPage from "../CreateNewEventPage/CreateNewEventPage";
import EventInformationPage from "../EventInformationPage/EventInformationPage";
import EventsPage from "../EventsPage/EventsPage";
import GalleryPage from "../GalleryPage/GalleryPage";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/advice" element={<AdvicePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/create-event" element={<CreateNewEventPage />} />
      <Route path="/event-information" element={<EventInformationPage />} />
    </Routes>
  );
};

export default Routing;
