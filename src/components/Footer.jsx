import React, { useEffect, useState } from "react";
import axios from "axios";
import '../components/Footer.css';
import logo from "../assets/DishaAI_Logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOffices = async () => {
      try {
        const response = await axios.get("https://disha-server.onrender.com/api/footer/");
        setOffices(response.data.data); // Assuming the API returns an array with office details
        setLoading(false);
      } catch (error) {
        setError("Failed to load office details");
        setLoading(false);
      }
    };

    fetchOffices();
  }, []);

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
            {/* Head Office */}
            <div>
              {loading ? (
                <p>Loading Head Office...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                offices[0] && (
                  <>
                    <div>
                      <p className="ofc_type">Head Office</p>
                    </div>
                    <div>
                      <p className="footer__address">{offices[0].address}</p>
                      <p className="footer__contact">
                        Call Us: <span>{offices[0].contact}</span>
                      </p>
                      <p className="footer__email">
                        E-Mail: <a href={`mailto:${offices[0].email}`}>{offices[0].email}</a>
                      </p>
                    </div>
                  </>
                )
              )}
            </div>

            {/* Regional Office */}
            <div>
              {loading ? (
                <p>Loading Regional Office...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                offices[1] && (
                  <>
                    <div>
                      <p className="ofc_type">Regional Office</p>
                    </div>
                    <div>
                      <p className="footer__address">{offices[1].address}</p>
                      <p className="footer__contact">
                        Call Us: <span>{offices[1].contact}</span>
                      </p>
                      <p className="footer__email">
                        E-Mail: <a href={`mailto:${offices[1].email}`}>{offices[1].email}</a>
                      </p>
                    </div>
                  </>
                )
              )}
            </div>
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="footer__links-section">
          <h3 className="footer__heading">Useful Links</h3>
          <ul className="footer__list">
            <li><Link to="/aboutus" className="footer__link">About Us</Link></li>
            <li><Link to="/terms&conditions" className="footer__link">Terms & Conditions</Link></li>
            <li><Link to="/refunds&cancellation" className="footer__link"> Refund & Cancellation</Link></li>
            <li><Link to="/privacy policy" className="footer__link">Privacy Policy</Link></li>
            <li><Link to="/products&services" className="footer__link">Product & Services</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
