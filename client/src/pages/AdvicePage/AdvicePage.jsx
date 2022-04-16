import React, { useEffect, useState } from "react";
const AdvicePage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetch("/api/advice")
        .then(res => res.json())
        .catch(err => err);
      setData(fetchedData);
    };

    getData();
  }, []);

  return (
    <div>
      {data?.map(advice => (
        <div key={advice.id}>{`${advice.id}. ${advice.advice}`}</div>
      ))}
    </div>
  );
};

export default AdvicePage;
