import React from "react";
import { Link, useParams } from "react-router-dom";
import { generateKey } from "../../Helpers/generateKeyFunction";
import { useFetchMealsList } from "../../Hooks/useFetchMealsList";
import MealItem from "./MealItem/MealItem";

const MealFields = () => {
  const { id } = useParams();
  const mealsData = useFetchMealsList(id);
  const createMealURL = `/create-meal/${id}`;

  return (
    <div className="card-meal card">
      <div className="card-title">Meal</div>

      <div className="card-list">
        {mealsData &&
          mealsData.map(meal => (
            <MealItem
              key={generateKey(meal.mealName)}
              serve={meal.mealServe}
              body={meal.mealName}
            />
          ))}
      </div>

      <Link to={createMealURL} className="card-link">
        Change meal serves
      </Link>
    </div>
  );
};

export default MealFields;
