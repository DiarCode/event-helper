import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./adviceStyle.css";
import HomeImage from "../../assets/adviceBG.png";
import AdviceList from "../../components/AdviceList/AdviceList";

const AdvicePage = () => {
  return (
    <div className="advice">
      <Navbar />
      <div className="advice-content">
        <div className="advice-image">
          <img src={HomeImage} alt="" />
        </div>
        <div className="advice-title">Helpful tips from our team</div>
        <AdviceList />
      </div>
      <Footer />
    </div>
  );
};

export default AdvicePage;
