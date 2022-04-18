import React from "react";
import "./createNewEventPage.css";
import Image from "../../assets/newEventImage.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import NewEventFields from "../../components/NewEventFields/NewEventFields";

const CreateNewEventPage = () => {
  return (
    <div className="newEvent">
      <Navbar />
      <div className="newEvent-content">
        <div className="newEvent-fields">
          <div className="newEvent-title">Create new event</div>
          <NewEventFields />
        </div>
        <div className="newEvent-image">
          <img src={Image} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateNewEventPage;
