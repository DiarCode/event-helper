import React from "react";
import "./sliderCard.css";
import Arrow from "../../assets/sliderArrow.png";
import Image from "../../assets/sliderImage.png";

const SliderCard = () => {
  return (
    <div className="slider">
      <div className="slider-content">
        <div className="slide-title">Weeding events</div>
        <div className="slider-carousel">
          <div className="carousel-back">  
            <img src={Arrow} alt="arrow" />
          </div>
          <div className="carousel-image">
            <img src={Image} alt="slider" />
          </div>
          <div className="carousel-next">
            <img src={Arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
