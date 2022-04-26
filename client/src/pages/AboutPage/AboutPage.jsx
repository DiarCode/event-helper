import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./aboutStyle.css";
import Home from "../../assets/aboutHome.png";
import Image1 from "../../assets/aboutImage1.png";
import Image2 from "../../assets/aboutImage2.png";
import Image3 from "../../assets/aboutImage3.png";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const AboutPage = () => {
  return (
    <div className="about">
      <div className="about-content">
        <Navbar />

        <div className="about-photo">
          <img src={Home} alt="home" />
        </div>

        <div className="about-blocks">
          <div className="about-block1 block">
            <div className="block1-text block-text">
              <div className="block1-title block-title">
                A successful event starts with excellent preparation
              </div>
              <div className="block1-body block-body">
                Our website will help you gather all the information you need
                about your upcoming event using our convenient service
              </div>
            </div>
            <div className="block1-img block-img">
              <img src={Image1} alt="" />
            </div>
          </div>
          <div className="about-block2 block">
            <div className="block2-img block-img">
              <img src={Image2} alt="" />
            </div>
            <div className="block2-text block-text">
              <div className="block2-title block-title">
                A successful event starts with excellent preparation{" "}
              </div>
              <div className="block2-body block-body">
                Our website will help you gather all the information you need
                about your upcoming event using our convenient service
              </div>
            </div>
          </div>
          <div className="about-block3 block">
            <div className="block3-text block-text">
              <div className="block3-title block-title">
                A successful event starts with excellent preparation{" "}
              </div>
              <div className="block3-body block-body">
                Our website will help you gather all the information you need
                about your upcoming event using our convenient service
              </div>
              <Link to="/signup" className="block3-signup">
                Sign up
              </Link>
            </div>
            <div className="block3-img block-img">
              <img src={Image3} alt="" />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
