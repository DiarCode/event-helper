import { useState } from "react";
import { useEffect } from "react";

const useFetchEventData = id => {
  const [eventData, setEventData] = useState();

  useEffect(() => {
    async function getData() {
      const response = await fetch(process.env.REACT_APP_GET_EVENTS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventID: id }),
      }).then(res => res.json());

      setEventData(response);
    }

    getData();
  }, []);

  return eventData;
};

export default useFetchEventData;
