import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import '../../src/index.css';

const TestimonialCard = ({ text, author, borderColor }) => (
    <div
        className="testimonial-card"
        style={{
            borderColor: borderColor,
        }}
    >
        <p>{text}</p>
        <span>- {author}</span>
    </div>
);

const TestimonialsSlider = () => {
    const testimonials = [
        {
            text: "I like how in-depth it was. Not just, “What are you interested in?” but how your personality and personal preferences play into a career fit.",
            author: "Pradyumna",
            borderColor: "#FF7676",
        },
        {
            text: "I was in cross direction towards my career choices. Thank God DISHAAI guided me the right career which suits my characteristics.",
            author: "Tanav",
            borderColor: "#FFD700",
        },
        {
            text: "This is a great tool, extremely accurate. The assessment has given me a great insight to align my parents and teachers in one direction.",
            author: "Anonymous",
            borderColor: "#00C6FF",
        },
        {
            text: "I found this platform to be truly insightful. It helped me align my career goals with my strengths and interests.",
            author: "Neha",
            borderColor: "#32CD32",
        },
    ];

    // State for controlling the slider
    const [slider, setSlider] = useState(null);

    const [slidesToShow, setSlidesToShow] = useState(2.8); // default value for larger screens

    // Update slidesToShow based on window size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSlidesToShow(1); // Show 1 slide on mobile
            } else {
                setSlidesToShow(2.8); // Default value for larger screens
            }
        };

        handleResize(); // Initial check on component mount

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    // Custom next and previous functions for arrows
    const handlePrev = () => {
        if (slider) slider.slickPrev();
    };

    const handleNext = () => {
        if (slider) slider.slickNext();
    };

    return (
        <section className="success-stories">
            <h2>DISHAI SUCCESS STORIES</h2>
            <div className="testimonial-box">
                <div className="leftsec">
                    <div className="left-section">
                        <h3>What People Say About Us</h3>
                    </div>
                    {/* Custom Arrows */}
                    <div className="controls">
                        <button onClick={handlePrev}>{"<"}</button>
                        <button onClick={handleNext}>{">"}</button>
                    </div>
                </div>
                <div className="testimonials-wrapper">
                    <Slider
                        {...settings}
                        ref={(slider) => setSlider(slider)}  // Reference for slider control
                    >
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                text={testimonial.text}
                                author={testimonial.author}
                                borderColor={testimonial.borderColor}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSlider;
