import React from "react";
import "./galleryStyle.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SliderCard from "../../components/SliderCard/SliderCard";

const GalleryPage = () => {
  return (
    <div className="gallery">
      <Navbar />
      <div className="gallery-content">
        <div className="gallery-slider-list">
          <SliderCard />
          <SliderCard />
          <SliderCard />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GalleryPage;
