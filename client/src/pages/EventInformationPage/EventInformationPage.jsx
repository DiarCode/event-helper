import React from "react";
import DateFields from "../../components/EventsInfoFields/DateFields/DateFields";
import GuestsFields from "../../components/EventsInfoFields/GuestFields/GuestsFields";
import MealFields from "../../components/EventsInfoFields/MealFields/MealFields";
import NotesFields from "../../components/EventsInfoFields/NotesFields/NotesFields";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./eventInformationPage.css";

const EventInformationPage = () => {
  return (
    <div className="eventInfo">
      <Navbar />
      <div className="eventInfo-content">
        <div className="eventInfo-title">Wedding</div>
        <div className="eventInfo-subtitle">Alice and Mark</div>

        <div className="eventInfo-card">
          <GuestsFields />
          <NotesFields />
          <DateFields />
          <MealFields />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventInformationPage;
