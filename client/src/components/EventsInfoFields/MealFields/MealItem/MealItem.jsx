import React from "react";
import { useParams } from "react-router-dom";
import { deleteMealService } from "../../../Helpers/helperMethods";
import "./mealItem.css";

const NoteItem = ({ serve, body }) => {
  const { id } = useParams();

  async function deleteMeal() {
    const response = await deleteMealService(id, serve);

    if (response.success) {
      window.location.reload(false);
    } else {
      console.log(response.error);
    }
  }

  return (
    <div className="mealItem">
      <div className="mealItem-title">{serve}:</div>
      <div className="mealItem-body">{body}</div>

      <div className="mealItem-delete">
        <button onClick={deleteMeal}>Delete</button>
      </div>
    </div>
  );
};

export default NoteItem;
