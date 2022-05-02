import React from "react";
import { useAdjustDate } from "../../Hooks/useAdjustDate";
import EventInfoItem from "../EventInfoItem/EventInfoItem";
import { Link, useParams } from "react-router-dom";

const DateFields = ({ dateInfo }) => {
  const { id } = useParams();
  const changeDateURL = `/change-date/${id}`;
  const adjustedDate = useAdjustDate(dateInfo);

  return (
    <div className="card-date card">
      <div className="card-title">Date</div>
      <div className="card-list">
        <EventInfoItem title={"Event date"} body={adjustedDate} />
      </div>
      <Link to={changeDateURL} className="card-link">
        Change event date
      </Link>
    </div>
  );
};

export default DateFields;
