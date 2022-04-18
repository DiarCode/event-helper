import React from "react";
import "../AdviceCard/adviceCard.css";
import CardImage from "../../assets/adviceCardImage.png";

const AdviceCard = () => {
  return (
    <div className="advice-card">
      <div className="advice-card-image">
        <img src={CardImage} alt="" />
      </div>

      <div className="advice-card-text">
        <div className="advice-card-title">
          How to organize your wedding event
        </div>
        <div className="advice-card-body">5 advice to make perfect wedding</div>
      </div>
    </div>
  );
};

export default AdviceCard;
