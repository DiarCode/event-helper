import React from "react";
import { useAdjustDate } from "../../Hooks/useAdjustDate";
import EventInfoItem from "../EventInfoItem/EventInfoItem";

const DateFields = ({ dateInfo }) => {
  const adjustedDate = useAdjustDate(dateInfo);

  return (
    <div className="card-date card">
      <div className="card-title">Date</div>
      <div className="card-list">
        <EventInfoItem title={"Event date:"} body={adjustedDate} />
      </div>
      <div className="card-link">Change event date</div>
    </div>
  );
};

export default DateFields;
