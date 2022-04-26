import React from "react";
import { Link } from "react-router-dom";
import "./eventHolder.css";

const EventHolder = ({ info }) => {
  const eventURL = `/event-information/${info._id}`;
  const rawDate = Date(info.eventDate).split(" ");
  const adjustedDate = `${rawDate[1]} - ${rawDate[2]} - ${rawDate[3]}`;
  return (
    <Link to={eventURL} className="holder">
      <div className="holder-content">
        <div className="holder-title">{info.eventName}</div>
        <div className="holder-subtitle">{info.eventDescription}</div>
        <div className="holder-date">{adjustedDate}</div>
      </div>
    </Link>
  );
};

export default EventHolder;
