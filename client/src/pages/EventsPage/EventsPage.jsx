import React from "react";
import EventsList from "../../components/EventsList/EventsList";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./eventsStyle.css";

const EventsPage = () => {
  return (
    <div className="events">
      <div className="events-content">
        <Navbar />
        <div className="events-holders">
          <div className="events-title">Your existing events</div>
          <EventsList />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default EventsPage;
