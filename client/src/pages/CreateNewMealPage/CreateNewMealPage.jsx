import React, { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./createNewMealPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { createNewMealService } from "../../components/Helpers/helperMethods";

const CreateNewMealPage = () => {
  const { id } = useParams();
  const serveRef = useRef();
  const nameRef = useRef();
  const pageNavigation = useNavigate();

  async function createNewMeal() {
    const serveValue = serveRef.current.value;
    const nameValue = nameRef.current.value;
    const response = await createNewMealService(id, serveValue, nameValue);

    if (response.success) {
      pageNavigation(`/event-information/${id}`);
    } else {
      console.log(response.error);
    }
  }

  return (
    <div className="newMeal">
      <Navbar />
      <div className="newMeal-content">
        <div className="newMeal-title">Add new meal serve</div>

        <div className="newMeal-fields">
          <input type="text" placeholder="Meal serve" ref={serveRef} />
          <input type="text" placeholder="Meal name" ref={nameRef} />
        </div>

        <div className="newMeal-btn">
          <button onClick={createNewMeal}>Add meal</button>
        </div>

        <div className="newMeal-ingridients">
          <div className="newMeal-ingridients-text">
            Don't know what to add?
          </div>
          <Link to="/meals-list">See the meals list</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateNewMealPage;
