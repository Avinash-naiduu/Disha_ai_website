import React from 'react';
import './Hero.css'; // Include any custom CSS for this section
import illustration from "../assets/Empowering.png"


const Hero = () => {
  return (
    <section className="hero">
      <div className="text-content">
        <h1>
          Empowering Student Success through{' '}
          <span className="text-highlight">AI-Driven</span> Holistic Development
        </h1>
        <p>
          DISHA AI is an AI-based SaaS platform that redefines student growth and development. Our innovative solution provides continuous skill assessment, monitoring, and mentoring, empowering students to reach their full potential.
        </p>
      </div>
      <div className="image-content">
        <img src={illustration} alt="Student Success Illustration" className="img-fluid" />
      </div>
    </section>
  );
};

export default Hero;
