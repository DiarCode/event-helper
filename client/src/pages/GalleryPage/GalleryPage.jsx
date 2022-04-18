import React from "react";
import "./galleryStyle.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const GalleryPage = () => {
  return (
    <div className="gallery">
      <Navbar />
      <div className="gallery-content">
        <div className="gallery-slider-list">
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GalleryPage;
