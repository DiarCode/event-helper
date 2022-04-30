import React from "react";
import { Link, useParams } from "react-router-dom";

const NotesFields = () => {
  const { id } = useParams();
  const url = `/create-note/${id}`;

  return (
    <div className="card-notes card">
      <div className="card-title">Event notes</div>
      <Link to={url} className="card-link">
        Add new notes
      </Link>
    </div>
  );
};

export default NotesFields;
