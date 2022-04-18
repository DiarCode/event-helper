import React, { useRef, useState } from "react";
import Footer from "../../components/Footer/Footer";
import MealsCard from "../../components/MealsCard/MealsCard";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import "./listOfMeals.css";

const ListOfMeals = () => {
  const [fetchedData, setFetchedData] = useState();
  const ingridient = useRef();

  async function getData() {
    const options = {
      method: "GET",
      url: process.env.REACT_APP_RAPID_URL,
      params: { q: ingridient.current.value },
      headers: {
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
      },
    };

    const responseData = await axios
      .request(options)
      .then(responseData => responseData.data.searches)
      .catch(error => error);

    setFetchedData(responseData);
  }

  function handleData() {
    if (fetchedData && ingridient) {
      return fetchedData.map((meal, index) => (
        <MealsCard key={index} meal={meal} index={index} />
      ));
    }
    return <div className="handler">Nothing in this list</div>;
  }

  return (
    <div className="mealsList">
      <Navbar />
      <div className="mealsList-content">
        <div className="mealsList-title">List of meals</div>

        <div className="mealsList-search">
          <input
            type="text"
            placeholder="Enter ingridient of meal"
            ref={ingridient}
          />
          <button onClick={getData}>Find</button>
        </div>

        <div className="mealsList-list">{handleData()}</div>
      </div>
      <Footer />
    </div>
  );
};

export default ListOfMeals;
