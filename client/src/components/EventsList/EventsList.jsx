import React from "react";
import EventHolder from "../EventHolder/EventHolder";
import Add from "../../assets/eventsAddIcon.png";
import "./eventsList.css";
import { Link } from "react-router-dom";
import useFetchEventsList from "../Hooks/useFetchEventsList";

const EventsList = () => {
  const eventsList = useFetchEventsList();

  return (
    <div className="events-list">
      <Link to="/create-event" className="events-add">
        <div className="events-add-icon">
          <img src={Add} alt="" />
        </div>
        <div className="events-add-text">Add event</div>
      </Link>

      {eventsList ? (
        eventsList.map(event => <EventHolder info={event} key={event._id} />)
      ) : (
        <></>
      )}
    </div>
  );
};

export default EventsList;
