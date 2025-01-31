import React from 'react';
import '../../src/index.css';
import contactimage from "../assets/contact us.png"


const ReachUs = () => {
  return (
    <section className="Reach-us">
      <h2>REACH US</h2>
      <div className="contact-section">
        <div className="contact-container">
          <div className="left1-section">
            <h1>We’d Love to Hear<br />from You</h1>
            <div className="illustration1"> <img src={contactimage} alt="Customer Support Illustration" /> </div>
          </div>
          <div className="right-section">
            <form className="contact-form" id="contactForm"action="https://formspree.io/f/xbljeara"method="POST">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first-name">
                    First Name<span>*</span>
                  </label>
                  <input type="text" id="first-name" name="first-name" placeholder="Enter First Name" required />
                  <small className="error-message"></small>
                </div>
                <div className="form-group">
                  <label htmlFor="last-name"> Last Name<span>*</span> </label>
                  <input type="text" id="last-name" name="last-name" placeholder="Enter Last Name"required/>
                  <small className="error-message"></small>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email"> E-mail<span>*</span> </label>
                <input type="email" id="email" name="email" placeholder="Enter Email Address" required />
                <small className="error-message"></small>
              </div>
              <div className="form-group">
                <label htmlFor="message">Write Message</label>
                <textarea id="message" name="message" placeholder="Enter Your Message" required></textarea>
                <small className="error-message"></small>
              </div>
              <button type="submit" className="submit-button"> SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachUs;
