import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/Terms.css';

const AboutUs = () => {
    return (
        <div className="container my-5 terms-container">
            <h1 className="terms-title">About us</h1>
            <p className="terms-paragraph">
                DISHAAI is the first AI based system to assess, track and guide students in an holistic manner to achieve their dreams and translate their passion into a successful career.
            </p>
            <ul className="terms-paragraph">
                <li>
                    The ONLY AI based platform in alignment with the NEP guidelines and expectations.
                </li>
                <li>
                    Combines 50+ years of research and 30+ years of global IVY league experience to develop a simplistic and accurate system applicable across all tier schools of India.
                </li>
                <li>
                    Not just a ONE-TIME solution, but involves CONTINUOUS ASSESSMENT based on the Child’s growth in terms of Academics, Exposure and Experience.
                </li>
                <li>
                    Career Assessment Report (CAR) involves 7 different types of analysis before arriving at the Career Alignment for students.
                </li>
            </ul>
            <p className="terms-paragraph">
                Ease of testing, analysis and personalised-reporting in quick time.
            </p>
        </div>
    );
};

export default AboutUs;
