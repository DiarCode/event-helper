import React, { useEffect } from "react";
import { useState } from "react";

const useFetchGuestsList = id => {
  const [guestsList, setGuestsList] = useState();

  useEffect(() => {
    async function getData() {
      const response = await fetch(process.env.REACT_APP_GET_GUESTS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventID: id }),
      }).then(res => res.json());

      setGuestsList(response);
    }

    getData();
  }, []);

  return guestsList;
};

export default useFetchGuestsList;
