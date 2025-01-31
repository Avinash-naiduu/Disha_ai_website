import React from 'react';
import '../../src/index.css';
import gif from "../assets/Our Offerings.gif";


const OfferingsSection = () => {
  return (
    <section className="offerings-section">
      <h3>Our Offerings</h3>
      <div className="offerings-content">
        <img src={gif} />
      </div>
    </section>
  );
};

export default OfferingsSection;
