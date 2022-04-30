import React from "react";
import { Link, useParams } from "react-router-dom";
import EventInfoItem from "../EventInfoItem/EventInfoItem";

const GuestsFields = ({ guestsInfo }) => {
  const { id } = useParams();
  const url = `/guests-list/${id}`;

  return (
    <div className="card-guests card">
      <div className="card-title">Guests</div>
      <div className="card-list">
        <EventInfoItem
          title={"Number of guests"}
          body={guestsInfo && guestsInfo.length}
        />
      </div>
      <Link to={url} className="card-link">
        See the list of guests
      </Link>
    </div>
  );
};

export default GuestsFields;
