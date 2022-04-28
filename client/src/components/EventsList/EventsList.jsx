import React, { useEffect } from "react";
import EventHolder from "../EventHolder/EventHolder";
import Add from "../../assets/eventsAddIcon.png";
import "./eventsList.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import useUserData from "../Hooks/useUserData";

const EventsList = () => {
  const [eventsList, setEventsList] = useState();
  const userData = useUserData();

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        process.env.REACT_APP_EVENTS_LIST_FETCH_URL,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userID: userData && userData.userID }),
        }
      ).then(res => res.json());

      setEventsList(response);
    }

    getData();
  }, []);

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
