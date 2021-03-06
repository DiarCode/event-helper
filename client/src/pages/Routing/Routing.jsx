import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../AboutPage/AboutPage";
import AdminPage from "../AdminPage/AdminPage";
import AdvicePage from "../AdvicePage/AdvicePage";
import ChangeDatePage from "../ChangeDatePage/ChangeDatePage";
import CreateNewEventPage from "../CreateNewEventPage/CreateNewEventPage";
import CreateNewGuestPage from "../CreateNewGuestPage/CreateNewGuestPage";
import CreateNewMealPage from "../CreateNewMealPage/CreateNewMealPage";
import CreateNewNotePage from "../CreateNewNotePage/CreateNewNotePage";
import EventInformationPage from "../EventInformationPage/EventInformationPage";
import EventsPage from "../EventsPage/EventsPage";
import GalleryPage from "../GalleryPage/GalleryPage";
import ListOfGuestsPage from "../ListOfGuestsPage/ListOfGuestsPage";
import ListOfMealsPage from "../ListOfMeals/ListOfMeals";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import ProtectedAdminRoutes from "./ProtectedRoutes/ProtectedAdminRoutes";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/advice" element={<AdvicePage />} />
      <Route path="/gallery" element={<GalleryPage />} />

      <Route element={<ProtectedRoutes />}>
        <Route
          path="/event-information/:id"
          element={<EventInformationPage />}
        />
        <Route path="/guests-list/:id" element={<ListOfGuestsPage />} />
        <Route path="/create-note/:id" element={<CreateNewNotePage />} />
        <Route path="/guest-list" element={<ListOfGuestsPage />} />
        <Route path="/meals-list" element={<ListOfMealsPage />} />
        <Route path="/create-event" element={<CreateNewEventPage />} />
        <Route path="/create-guest/:id" element={<CreateNewGuestPage />} />
        <Route path="/create-meal/:id" element={<CreateNewMealPage />} />
        <Route path="/change-date/:id" element={<ChangeDatePage />} />
      </Route>

      <Route element={<ProtectedAdminRoutes />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>
    </Routes>
  );
};

export default Routing;
