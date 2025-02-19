import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../src/index.css";

const TestimonialCard = ({ text, author, borderColor }) => (
    <div className="testimonial-card" style={{ 
        borderLeft: `2px solid ${borderColor}`, 
        borderTop: `2px solid ${borderColor}`, 
        borderRight: "none", 
        borderBottom: "none"
    }}>
        <p>{text}</p>
        <span>- {author}</span>
    </div>
);


const TestimonialsSlider = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [slider, setSlider] = useState(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get("https://disha-server.onrender.com/api/testimonials");
                setTestimonials(response.data);
                setLoading(false);
            } catch (error) {
                setError("Failed to load testimonials");
                setLoading(false);
            }
        };
        fetchTestimonials();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="success-stories">
            <h2 className="title">What People Say About Us</h2>
            <div className="testimonial-box">
                <div className="left-section">
                    <h3>What People Say About Us</h3>
                    <div className="controls">
                        <button className="prev-btn" onClick={() => slider?.slickPrev()}>&lt;</button>
                        <button className="next-btn" onClick={() => slider?.slickNext()}>&gt;</button>
                    </div>
                </div>
                <div className="testimonials-wrapper">
                    {loading ? (
                        <p>Loading testimonials...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <Slider {...settings} ref={setSlider}>
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard
                                    key={index}
                                    text={testimonial.text}
                                    author={testimonial.authorname}
                                    borderColor={testimonial.bordercolor}
                                />
                            ))}
                        </Slider>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSlider;
