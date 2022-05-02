import React from "react";
import "./eventInfoItem.css";

const EventInfoItem = ({ title, body }) => {
  return (
    <div className="eventInfoItem">
      <div className="eventInfoItem-title">{title}:</div>
      <div className="eventInfoItem-body">{body}</div>
    </div>
  );
};

export default EventInfoItem;
