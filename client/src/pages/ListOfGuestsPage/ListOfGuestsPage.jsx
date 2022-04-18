import React from "react";
import Footer from "../../components/Footer/Footer";
import GuestCard from "../../components/GuestCard/GuestCard";
import Navbar from "../../components/Navbar/Navbar";
import "./listOfGuestsPage.css";

const ListOfGuestsPage = () => {
  return (
    <div className="guestList">
      <Navbar />
      <div className="guestList-content">
        <div className="guestList-title">List of guests</div>
        <div className="guestList-add">Add new</div>

        <div className="guestList-search">
          <input type="text" placeholder="Enter name of guest" />
        </div>

        <div className="guestList-list">
          <GuestCard />
          <GuestCard />
          <GuestCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListOfGuestsPage;
