import React from "react";
import { useParams } from "react-router-dom";
import { deleteGuestService } from "../Helpers/helperMethods";
import "./guestCard.css";

const GuestCard = ({ info }) => {
  const { id } = useParams();

  async function deleteGuest() {
    const response = await deleteGuestService(id, info.guestName);

    if (response.success) {
      window.location.reload(false);
    } else {
      console.log(response.error);
    }
  }

  return (
    <div className="guestList-item">
      <div className="guestList-item-info">
        <div className="guestList-item-name">{info.guestName}</div>
        <div className="guestList-item-seat">{info.guestSeat}</div>
      </div>
      <div className="guestList-item-delete">
        <button onClick={deleteGuest}>Delete</button>
      </div>
    </div>
  );
};

export default GuestCard;
