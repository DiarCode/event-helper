const deleteEventService = async id => {
  const response = await fetch(process.env.REACT_APP_EVENT_DELETE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ eventID: id }),
  }).then(res => res.json());

  return response;
};

const createNewEventService = async (
  eventName,
  eventDescription,
  eventDate,
  uid
) => {
  const response = await fetch(process.env.REACT_APP_NEW_EVENT_FETCH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventName: eventName,
      eventDescription: eventDescription,
      eventDate: eventDate,
      uid: uid,
    }),
  }).then(res => res.json());

  return response;
};

const deleteNoteService = async (id, title, body) => {
  const response = await fetch(process.env.REACT_APP_NOTE_DELETE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ eventID: id, noteTitle: title, noteBody: body }),
  }).then(res => res.json());

  return response;
};

const createNewNoteService = async (id, titleValue, bodyValue) => {
  const response = await fetch(process.env.REACT_APP_CREATE_NOTE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventID: id,
      noteTitle: titleValue,
      noteBody: bodyValue,
    }),
  }).then(res => res.json());

  return response;
};

export {
  deleteEventService,
  createNewEventService,
  deleteNoteService,
  createNewNoteService,
};
