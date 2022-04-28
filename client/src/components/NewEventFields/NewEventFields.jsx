import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createNewEventService } from "../Helpers/helperMethods";
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

    const response = await createNewEventService(
      eventName,
      eventDescription,
      eventDate,
      uid
    );

    if (response.success) {
      pageNavigation(`../event-information/${response.eventID}`);
    } else {
      alert(response.error);
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
