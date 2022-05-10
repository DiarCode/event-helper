import React from "react";
import "../AdviceCard/adviceCard.css";

const AdviceCard = ({ advice }) => {
  function redirectToAdvice() {
    window.location.href = advice.adviceLink;
  }

  function handleSizeOfBody() {
    let body = advice.adviceBody;

    const adjustedBody = body.split(" ").slice(0, 25);
    adjustedBody[adjustedBody.length - 1] = ".";
    return adjustedBody.join(" ") + "..";
  }

  return (
    <div className="advice-card" onClick={redirectToAdvice}>
      <div className="advice-card-image">
        <img src={advice.adviceImageURL} alt="advice" />
      </div>

      <div className="advice-card-text">
        <div className="advice-card-title">{advice.adviceTitle}</div>
        <div className="advice-card-body">{handleSizeOfBody()}</div>
      </div>
    </div>
  );
};

export default AdviceCard;
