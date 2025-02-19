import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';

const HeroSection = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get("https://disha-server.onrender.com/api/banners/");
        setBanners(response.data); // Assuming API returns an array of banners
        console.log(response.data)
        setLoading(false);
      } catch (error) {
        setError("Failed to load banners");
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

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

  return (
    <section className="hero-section px-lg-5 container-fluid" style={{ paddingTop: "80px" }}>
      {loading ? (
        <p>Loading banners...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index} className="carousel-item">
              <img 
                src={`https://disha-server.onrender.com/uploads/${banner.imageUrl}`} 
                alt={`Banner ${index + 1}`} 
                className="d-block w-100" 
              />
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
};

export default HeroSection;
