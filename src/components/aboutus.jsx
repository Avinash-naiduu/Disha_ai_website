import React from 'react';
import '../../src/index.css';
import PrahaladKarnam from "../assets/Prahalad Karnam.jpg"
import syamphoto from "../assets/syam photo.png"
import Harvard from "../assets/Harvard Business School.png"
import Columbia from "../assets/Columbia Business School.png"


const AboutUs = () => {
  return (
    <section className="about-us">
      <h2>ABOUT TEAM</h2>
      <div className="cards">
        {/* Card 1: Prahalad Karnam */}
        <div className="card1">
          <div>
            <img src={PrahaladKarnam} alt="Profile Picture" className="profile-image" />
            <div className="titletext">
              <div className="name">Prahalad Karnam</div>
              <div className="title">CEO & Co Founder</div>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div className="description">
              21+ years of Global Experience, Columbia Business School, Strategic Leadership -
              Harvard Business School, Strategy & Operations Consulting, Global Leader, CPG Industry Leader,
              Leader as Coach - Columbia Business School (Mentor Board), People Strategist, Managed Global Change rollouts.
            </div>
            <div className="logos">
              <img className="logosimage1" src={Columbia} alt="Columbia Business School Logo" />
              <img className="logosimage2" src={Harvard} alt="Harvard Business School Logo" />
            </div>
          </div>
          <p className="description">
            Setup and Ran Multi-M$ global business units, Visiting Professor - IIMs and other reputed
            Universities, Strategic Advisor and Mentor to Entrepreneurs.
          </p>
        </div>

        {/* Card 2: Syam Ivaturi */}
        <div className="card1">
          <div>
            <img src={syamphoto} alt="Profile Picture" className="profile-image" />
            <div className="titletext">
              <div className="name">Syam Ivaturi</div>
              <div className="title">CMO & Co Founder</div>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div className="description2">
              I hold master’s degrees in Marketing and Business Analytics and am currently studying CRM at IIM Bangalore.
              With 15+ years in corporate roles, I’ve worked with companies like DXC Technology and ING Group, gaining
              expertise in engineering, marketing, and management.
              Passionate about AI research, I’m a Goa Founders Club member and IIT Mumbai E-Cell Jury member. My work is
              published in SCOOPUS journals, and I mentor students in areas like Marketing, Finance, and HR Analytics.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
