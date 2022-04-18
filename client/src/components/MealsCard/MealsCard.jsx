import React from "react";

const MealsCard = ({ index, meal }) => {
  return (
    <div className="mealsList-item">
      <div className="mealsList-item-name">
        {index + 1}. {meal}
      </div>
    </div>
  );
};

export default MealsCard;
