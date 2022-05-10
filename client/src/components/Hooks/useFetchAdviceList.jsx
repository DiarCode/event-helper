import { useEffect } from "react";
import { useState } from "react";

const useFetchAdviceList = () => {
  const [adviceList, setAdviceList] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://event-helper-server.herokuapp.com/api/admin/get/advice"
      ).then(response => response.json());

      if (!response.success) return console.log(response.error);
      setAdviceList(response.data);
    }
    getData();
  }, []);

  return adviceList;
};

export { useFetchAdviceList };
