import React, { useEffect, useState } from "react";

const useFetchMealsList = id => {
  const [mealsList, setMealsList] = useState();

  useEffect(() => {
    async function getData() {
      const response = await fetch(process.env.REACT_APP_GET_MEALS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventID: id }),
      }).then(res => res.json());

      setMealsList(response);
    }

    getData();
  }, []);

  return mealsList;
};

export { useFetchMealsList };
