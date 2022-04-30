import React from "react";
import { Link } from "react-router-dom";
import { useAdjustDate } from "../Hooks/useAdjustDate";
import "./eventHolder.css";

const EventHolder = ({ info }) => {
  const eventURL = `/event-information/${info._id}`;
  const adjustedDate = useAdjustDate(info.eventDate);
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
