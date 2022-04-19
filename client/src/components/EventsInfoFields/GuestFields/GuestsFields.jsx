import React from "react";
import EventInfoItem from "../EventInfoItem/EventInfoItem";

const GuestsFields = () => {
  return (
    <div className="card-guests card">
      <div className="card-title">Guests</div>
      <div className="card-list">
        <EventInfoItem title={"Number of guests"} body={"0"} />
      </div>
      <div className="card-link">See the list of guests</div>
    </div>
  );
};

export default GuestsFields;
