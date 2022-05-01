import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { changeDateService } from "../../components/Helpers/helperMethods";
import Navbar from "../../components/Navbar/Navbar";
import "./changeDatePage.css";

const ChangeDatePage = () => {
  const newDate = useRef();
  const { id } = useParams();
  const pageNavigation = useNavigate();

  async function changeDate() {
    const newDateValue = newDate.current.value;
    const response = await changeDateService(id, newDateValue);

    if (response.success) {
      pageNavigation(`/event-information/${id}`);
    } else {
      console.log(response.error);
    }
  }

  return (
    <div className="changeDate">
      <Navbar />
      <div className="changeDate-content">
        <div className="changeDate-title">Choose new date</div>

        <div className="changeDate-fields">
          <input type="date" placeholder="Note title" ref={newDate} />
        </div>

        <div className="changeDate-btn">
          <button onClick={changeDate}>Change date</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChangeDatePage;
