import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchNotesList } from "../../Hooks/useFetchNotesList";
import NoteItem from "./NoteItem/NoteItem";

const NotesFields = () => {
  const { id } = useParams();
  const notesList = useFetchNotesList(id);
  const url = `/create-note/${id}`;

  const generateKey = pre => {
    return `${pre}_${new Date().getTime()}`;
  };

  return (
    <div className="card-notes card">
      <div className="card-title">Event notes</div>
      <div className="card-list">
        {notesList &&
          notesList.map(note => (
            <NoteItem
              key={generateKey(note.noteTitle)}
              title={note.noteTitle}
              body={note.noteBody}
            />
          ))}
      </div>
      <Link to={url} className="card-link">
        Add new notes
      </Link>
    </div>
  );
};

export default NotesFields;
