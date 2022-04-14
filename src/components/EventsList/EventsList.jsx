import React from "react";
import EventHolder from "../EventHolder/EventHolder";
import Add from "../../assets/eventsAddIcon.png";
import "./eventsList.css";

const EventsList = () => {
  return (
    <div className="events-list">
      <div className="events-add">
        <div className="events-add-icon">
          <img src={Add} alt="" />
        </div>
        <div className="events-add-text">Add event</div>
      </div>
      <EventHolder />
      <EventHolder />
      <EventHolder />
      <EventHolder />
    </div>
  );
};

export default EventsList;
