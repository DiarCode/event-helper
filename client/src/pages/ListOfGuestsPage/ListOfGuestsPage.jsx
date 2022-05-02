import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import GuestCard from "../../components/GuestCard/GuestCard";
import { generateKey } from "../../components/Helpers/generateKeyFunction";
import useFetchGuestsList from "../../components/Hooks/useFetchGuestsList";
import Navbar from "../../components/Navbar/Navbar";
import "./listOfGuestsPage.css";

const ListOfGuestsPage = () => {
  const { id } = useParams();
  const [searchValue, setSearchValue] = useState("");
  const guestsList = useFetchGuestsList(id);
  const [filteredList, setFilteredList] = useState();
  const createNewGuestURL = `/create-guest/${id}`;

  useEffect(() => {
    if (searchValue == "") {
      setFilteredList(() => guestsList);
    }
  }, [guestsList, filteredList]);

  function handleSearchInput(e) {
    setSearchValue(() => e.target.value);

    setFilteredList(
      filteredList.filter(guest => {
        if (searchValue == "") return guest;
        return (
          guest.guestName.toLowerCase().includes(searchValue.toLowerCase()) ||
          guest.guestSeat.includes(searchValue)
        );
      })
    );
  }

  return (
    <div className="guestList">
      <Navbar />
      <div className="guestList-content">
        <div className="guestList-title">List of guests</div>
        <Link to={createNewGuestURL} className="guestList-add">
          Add new
        </Link>

        <div className="guestList-search">
          <input
            type="text"
            placeholder="Enter name or seat"
            value={searchValue}
            onChange={handleSearchInput}
          />
        </div>

        <div className="guestList-list">
          {filteredList && filteredList.length !== 0 ? (
            filteredList.map(guest => (
              <GuestCard info={guest} key={generateKey(guest.guestName)} />
            ))
          ) : (
            <div className="guestList-list-handler">There's nothing here</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListOfGuestsPage;
