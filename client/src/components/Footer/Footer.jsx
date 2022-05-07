import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/footerLogo.png";
import "./footerStyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo"><Link to="/">Event-Helper</Link></div>
        <div className="footer-info">
          <div className="footer-services">
            <div className="footer-title">Services</div>
            <div className="footer-list">
              <Link to="/events">Events</Link>
              <Link to="/advice">Advice tab</Link>
              <Link to="/events">Notes</Link>
            </div>
          </div>
          <div className="footer-contacts">
            <div className="footer-title">Contacts</div>
            <div className="footer-list">
              <a href="https://www.instagram.com">Instagram</a>
              <a href="https://www.facebook.com">Facebook</a>
              <div>event.helper@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
