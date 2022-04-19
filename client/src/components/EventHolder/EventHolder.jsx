import React from "react";
import { Link } from "react-router-dom";
import "./eventHolder.css";

const EventHolder = () => {
  return (
    <Link to="/event-information" className="holder">
      <div className="holder-content">
        <div className="holder-title">Wedding event</div>
        <div className="holder-subtitle">Alice and mark</div>
        <div className="holder-date">21.03.2022</div>
      </div>
    </Link>
  );
};

export default EventHolder;
