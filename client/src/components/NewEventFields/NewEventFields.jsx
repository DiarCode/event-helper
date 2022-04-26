import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useUserData from "../Hooks/useUserData";
import "./newEventFields.css";

const NewEventFields = () => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  const userData = useUserData();
  const pageNavigation = useNavigate();

  async function createNewEvent() {
    const eventName = nameRef.current.value;
    const eventDescription = descriptionRef.current.value;
    const eventDate = dateRef.current.value;
    const uid = userData.userID;

    const response = await fetch(process.env.REACT_APP_NEW_EVENT_FETCH_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName: eventName,
        eventDescription: eventDescription,
        eventDate: eventDate,
        uid: uid,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.status === "OK") {
      pageNavigation(`../event-information/${data.eventID}`);
    } else {
      alert(data.error);
    }
  }

  return (
    <div className="newEvent-inputs">
      <input
        className="newEvent-name"
        placeholder="Event name"
        required={true}
        ref={nameRef}
      />
      <input
        className="newEvent-descrip"
        placeholder="Event description"
        required={true}
        ref={descriptionRef}
      />
      <input
        className="newEvent-date"
        type="date"
        placeholder="Event date (21-11-2004)"
        required={true}
        ref={dateRef}
      />
      <button className="newEvent-btn" onClick={createNewEvent}>
        Create
      </button>
    </div>
  );
};

export default NewEventFields;
