import React from "react";
import { useParams } from "react-router-dom";
import { deleteNoteService } from "../../../Helpers/helperMethods";
import "./noteItem.css";

const NoteItem = ({ title, body }) => {
  const { id } = useParams();

  async function deleteNote() {
    const response = await deleteNoteService(id, title);

    if (response.success) {
      window.location.reload(false);
    } else {
      console.log(response.error);
    }
  }

  return (
    <div className="noteItem">
      <div className="noteItem-title">{title}:</div>
      <div className="noteItem-body">{body}</div>

      <div className="noteItem-delete">
        <button onClick={deleteNote}>Delete</button>
      </div>
    </div>
  );
};

export default NoteItem;
