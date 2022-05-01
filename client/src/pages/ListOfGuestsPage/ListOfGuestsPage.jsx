import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import GuestCard from "../../components/GuestCard/GuestCard";
import { generateKey } from "../../components/Helpers/generateKeyFunction";
import useFetchGuestsList from "../../components/Hooks/useFetchGuestsList";
import Navbar from "../../components/Navbar/Navbar";
import "./listOfGuestsPage.css";

const ListOfGuestsPage = () => {
  const { id } = useParams();
  const guestsList = useFetchGuestsList(id);
  const createNewGuestURL = `/create-guest/${id}`;

  return (
    <div className="guestList">
      <Navbar />
      <div className="guestList-content">
        <div className="guestList-title">List of guests</div>
        <Link to={createNewGuestURL} className="guestList-add">
          Add new
        </Link>

        <div className="guestList-search">
          <input type="text" placeholder="Enter name of guest" />
        </div>

        <div className="guestList-list">
          {guestsList &&
            guestsList.map(guest => (
              <GuestCard info={guest} key={generateKey(guest.guestName)} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListOfGuestsPage;
