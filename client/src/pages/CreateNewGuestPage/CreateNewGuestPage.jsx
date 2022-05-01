import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { createNewGuestService } from "../../components/Helpers/helperMethods";
import Navbar from "../../components/Navbar/Navbar";
import "./createNewGuest.css";

const CreateNewGuestPage = () => {
  const { id } = useParams();
  const nameRef = useRef();
  const seatRef = useRef();
  const pageNavigation = useNavigate();

  async function createNewGuest() {
    const nameValue = nameRef.current.value;
    const seatValue = seatRef.current.value;
    const response = await createNewGuestService(id, nameValue, seatValue);

    if (response.success) {
      pageNavigation(`/event-information/${id}`);
    } else {
      console.log(response.error);
    }
  }

  return (
    <div className="newGuest">
      <Navbar />
      <div className="newGuest-content">
        <div className="newGuest-title">Add new guest</div>

        <div className="newGuest-fields">
          <input type="text" placeholder="Guest name" ref={nameRef} />
          <input type="text" placeholder="Guest seat number" ref={seatRef} />
        </div>

        <div className="newGuest-btn">
          <button onClick={createNewGuest}>Add guest</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateNewGuestPage;
