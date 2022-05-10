import { useEffect, useState } from "react";
import useUserData from "../Hooks/useUserData";

const useFetchEventsList = () => {
  const userData = useUserData();
  const [eventsList, setEventsList] = useState();

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        process.env.REACT_APP_EVENTS_LIST_FETCH_URL,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userID: userData && userData.userID }),
        }
      ).then(res => res.json());

      setEventsList(response);
    }

    getData();
  }, []);

  return eventsList || [];
};

export default useFetchEventsList;
