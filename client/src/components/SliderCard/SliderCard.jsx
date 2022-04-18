import React from "react";
import "swiper/css";
import "./sliderCard.css";
import SliderImage from "../../assets/sliderImage.png";
import Arrow from "../../assets//sliderArrow.png";

const SliderCard = () => {
  return (
    <div className="slider">
      <div className="slider-title">Wedding events</div>
      <div className="slider-carousel">
        <div className="slider-back">
          <img src={Arrow} alt="" />
        </div>
        <div className="slider-image">
          <img src={SliderImage} alt="slider" />
        </div>
        <div className="slider-next">
          <img src={Arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
