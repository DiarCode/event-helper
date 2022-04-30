import React from "react";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./createNewNote.css";

const CreateNewNotePage = () => {
  const { id } = useParams();
  const titleRef = useRef();
  const bodyRef = useRef();
  const pageNavigation = useNavigate();

  async function createNewNote() {
    const titleValue = titleRef.current.value;
    const bodyValue = bodyRef.current.value;
    const response = await fetch(process.env.REACT_APP_CREATE_NOTE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventID: id,
        noteTitle: titleValue,
        noteBody: bodyValue,
      }),
    }).then(res => res.json());

    console.log(response);

    if (response.success) {
      pageNavigation(`/event-information/${id}`);
    } else {
      console.log(response.error);
    }
  }

  return (
    <div className="newNote">
      <Navbar />
      <div className="newNote-content">
        <div className="newNote-title">Add new note</div>

        <div className="newNote-fields">
          <input type="text" placeholder="Note title" ref={titleRef} />
          <input type="text" placeholder="Note body" ref={bodyRef} />
        </div>

        <div className="newNote-btn">
          <button onClick={createNewNote}>Add note</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateNewNotePage;
