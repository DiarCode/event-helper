import React from "react";
import AdviceCard from "../AdviceCard/AdviceCard";
import "./adviceList.css";
import { useFetchAdviceList } from "../Hooks/useFetchAdviceList";

const AdviceList = () => {
  const adviceList = useFetchAdviceList();
  return (
    <div className="advice-list">
      {adviceList &&
        adviceList.map(advice => (
          <AdviceCard advice={advice} key={advice._id} />
        ))}
    </div>
  );
};

export default AdviceList;
