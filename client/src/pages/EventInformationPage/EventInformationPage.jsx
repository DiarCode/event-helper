import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import DateFields from "../../components/EventsInfoFields/DateFields/DateFields";
import GuestsFields from "../../components/EventsInfoFields/GuestFields/GuestsFields";
import MealFields from "../../components/EventsInfoFields/MealFields/MealFields";
import NotesFields from "../../components/EventsInfoFields/NotesFields/NotesFields";
import Footer from "../../components/Footer/Footer";
import { deleteEventService } from "../../components/Helpers/helperMethods";
import useFetchEventData from "../../components/Hooks/useFetchEventData";
import Navbar from "../../components/Navbar/Navbar";
import "./eventInformationPage.css";

const EventInformationPage = () => {
  const { id } = useParams();
  const eventData = useFetchEventData(id);
  const pageNavigation = useNavigate();

  async function deleteEvent() {
    // eslint-disable-next-line
    const isPermitted = confirm("Are you sure you want to delete this event?");

    if (isPermitted) {
      const response = await deleteEventService(id);

      if (response.success) {
        pageNavigation("../events");
      }
    }
  }

  return (
    <div className="eventInfo">
      <Navbar />
      <div className="eventInfo-content">
        <div className="eventInfo-title">
          {eventData && eventData.eventName}
        </div>
        <div className="eventInfo-subtitle">
          {eventData && eventData.eventDescription}
        </div>

        <div className="eventInfo-card">
          <GuestsFields info={eventData && eventData.eventGuests} />
          <NotesFields info={eventData && eventData.eventNotes} />
          <DateFields info={eventData && eventData.eventDate} />
          <MealFields info={eventData && eventData.eventMeals} />
        </div>

        <div className="eventInfo-delete">
          <button onClick={deleteEvent}>Delete</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventInformationPage;
