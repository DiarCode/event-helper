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

const deleteNoteService = async (id, title) => {
  const response = await fetch(process.env.REACT_APP_NOTE_DELETE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ eventID: id, noteTitle: title }),
  }).then(res => res.json());

  return response;
};

const deleteGuestService = async (id, name) => {
  const response = await fetch(process.env.REACT_APP_GUEST_DELETE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ eventID: id, guestName: name }),
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

const createNewGuestService = async (id, nameValue, seatValue) => {
  const response = await fetch(process.env.REACT_APP_CREATE_GUEST_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventID: id,
      guestName: nameValue,
      guestSeat: seatValue,
    }),
  }).then(res => res.json());

  return response;
};

const changeDateService = async (id, newDate) => {
  const response = await fetch(process.env.REACT_APP_CHANGE_DATE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventID: id,
      newDate: newDate,
    }),
  }).then(res => res.json());

  return response;
};

export {
  deleteEventService,
  createNewEventService,
  deleteNoteService,
  createNewNoteService,
  createNewGuestService,
  deleteGuestService,
  changeDateService,
};
