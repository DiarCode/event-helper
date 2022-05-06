import { useEffect, useState } from "react";

const useFetchNotesList = id => {
  const [notesList, setNotesList] = useState();

  useEffect(() => {
    async function getData() {
      const response = await fetch(process.env.REACT_APP_GET_NOTES_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventID: id }),
      }).then(res => res.json());

      setNotesList(response);
    }

    getData();
  }, []);

  return notesList;
};

export { useFetchNotesList };
