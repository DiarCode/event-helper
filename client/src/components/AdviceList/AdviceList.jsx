import React from "react";
import AdviceCard from "../AdviceCard/AdviceCard";
import "./adviceList.css";

const AdviceList = () => {
  return (
    <div className="advice-list">
      <AdviceCard />
      <AdviceCard />
      <AdviceCard />
      <AdviceCard />
      <AdviceCard />
    </div>
  );
};

export default AdviceList;
