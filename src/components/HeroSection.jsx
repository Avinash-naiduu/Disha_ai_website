import React from 'react';
import Banner1 from "../assets/Are-you-Worried-about-YOUR-CHILD’S-FUTURE.png"
import Banner2 from "../assets/Do-you-know-your-child’s-interest-AND-strengths.png"
import Banner3 from "../assets/how-do-you-identify-and-nurture-the-right-skill-set-for-your-child.png"
import Slider from 'react-slick';


const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
    {
      src: Banner1,
      alt: 'Banner 1',
    },
    {
      src: Banner2,
      alt: 'Banner 2',
    },
    {
      src: Banner3,
      alt: 'Banner 3',
    },
  ];

  return (
    <section className="hero-section px-lg-5 container-fluid" style={{paddingTop:"80px"}}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item">
            <img
              src={slide.src}
              alt={slide.alt}
              className="d-block w-100"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
