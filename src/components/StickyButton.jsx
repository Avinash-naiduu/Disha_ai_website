import React from "react";
import whatsapp from "../assets/whatsapp image.png"
import "./StickyButton.css";
import { Link } from "react-router-dom";


const StickyButton = () => {
  return (
    <div>
      <Link to="https://api.whatsapp.com/send/?phone=9704611443&text=Hello+there%21+I+need+help&type=phone_number&app_absent=0" className="contact-us" target="_blank">
        <div className="icon-container">
          <img src={whatsapp} alt="WhatsApp"/>
        </div>
        <span className="contact-text">Contact us</span>
        </Link>
    </div>
  );
};

export default StickyButton;
