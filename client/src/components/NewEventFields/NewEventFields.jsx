import React from "react";
import "./newEventFields.css";

const NewEventFields = () => {
  return (
    <div className="newEvent-inputs">
      <input className="newEvent-name" placeholder="Event name" />
      <input className="newEvent-descrip" placeholder="Event description" />
      <input className="newEvent-date" placeholder="Event date" />
      <button className="newEvent-btn">Create</button>
    </div>
  );
};

export default NewEventFields;
