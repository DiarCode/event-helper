const deleteEventService = async id => {
  const response = await fetch("http://localhost:8000/api/events/delete", {
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

export { deleteEventService, createNewEventService };
