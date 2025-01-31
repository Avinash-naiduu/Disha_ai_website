import React from "react";
import '../components/Footer.css';
import logo from "../assets/DishaAI_Logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo and Social Media Section */}
        <div className="footer__logo-section">
          <img src={logo} alt="Disha AI" className="footer__logo" />
          <div className="footer__social-section">
            <h3 className="footer__heading">Social Media</h3>
            <div className="footer__social-icons">
              <a href="#" className="footer__social-icon">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="footer__social-icon">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="footer__social-icon">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#" className="footer__social-icon">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer__contact-section">
          <h3 className="footer__heading">Get In Touch</h3>
          <h3 className="footer__title">DishaAI Edutech Solutions Pvt Ltd</h3>
          <div className="address_details">
            <div>
              <div>
                <p className="ofc_type">Head Office</p>
              </div>
              <div>
                <p className="footer__address">
                  Flat NO 102, 1ST FLR, Indus Sangam Galaxy Sangam Enclave Lane,
                  Kothanur, Bengaluru, Karnataka 560077
                </p>
                <p className="footer__contact">
                  Call Us: <span>+91 89043 22716</span>
                </p>
                <p className="footer__email">
                  E-Mail: <a href="mailto:syam@dishaai.com">syam@dishaai.com</a>
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className="ofc_type">Regional Office</p>
              </div>
              <div>
                <p className="footer__address">
                  FiiRE, The Don Bosco College of Engineering, behind PWD office,
                  Fatorda, Madgaon, Goa 403601
                </p>
                <p className="footer__contact">
                  Call Us: <span>+91 89043 22716</span>
                </p>
                <p className="footer__email">
                  E-Mail: <a href="mailto:syam@dishaai.com">syam@dishaai.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="footer__links-section">
          <h3 className="footer__heading">Useful Links</h3>
          <ul className="footer__list">
          <li><Link to="/aboutus" className="footer__link">About Us</Link></li>
          <li><Link to="/terms" className="footer__link">Terms & Conditions</Link></li>
          <li><Link to="/refunds" className="footer__link"> Refund & Cancellation</Link></li>
          <li><Link to="/Privacy" className="footer__link">Privacy Policy</Link></li>
          <li><Link to="/Products" className="footer__link">Product & Services</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
