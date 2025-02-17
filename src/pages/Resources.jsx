import React, { useState, useEffect } from "react";
import "./css/Events.css";
import { useNavigate } from "react-router-dom";
import Image from "../assets/DishaAI_Logo.png"

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

const Events = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://disha-server.onrender.com/api/resource");
      const data = await response.json();
      console.log("Categories API Response:", data);

      if (!Array.isArray(data)) {
        throw new Error("Invalid API response format");
      }
      setCategories(data);

      if (data.length > 0) {
        setActiveCategory(data[0]);
        fetchEvents(data[0]._id);
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
      setError("Failed to load categories");
    }
  };

  const fetchEvents = async (categoryId) => {
    setLoading(true);
    try {
      const response = await fetch(`https://disha-server.onrender.com/api/content?categoryId=${categoryId}`);
      const data = await response.json();
      console.log("Events API Response:", data);

      if (!data || !Array.isArray(data.data)) {
        throw new Error("Invalid API response format");
      }

      const filteredEvents = data.data.filter((event) => event.category?._id === categoryId);
      console.log(`Filtered Events for Category ID ${categoryId}:`, filteredEvents);

      setEvents([...filteredEvents]);
    } catch (err) {
      console.error("Error fetching events:", err);
      setError("Failed to load events");
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (index) => {
    const selectedCategory = categories[index];
    setActiveCategory(selectedCategory);
    setActiveTab(index);
    fetchEvents(selectedCategory._id);
  };

  const handleReadMore = (event) => {
    console.log(event)
    navigate(`/blogdetails/${event}`);
  };

  return (
    <main className="main-content">
      {isMobile ? (
        <div className="tabs-container">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <button
                key={index}
                className={`tab-button ${activeTab === index ? "active" : ""}`}
                onClick={() => handleCategoryClick(index)}
              >
                {category.name}
              </button>
            ))
          ) : (
            <p>No categories found</p>
          )}
        </div>
      ) : (
        <aside className="sidebar">
          <h2 className="sidebar-title">Resource</h2>
          <ul className="sidebar-list">
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <li key={index} className={activeCategory?._id === category._id ? "active" : ""} onClick={() => handleCategoryClick(index)}>
                  <a href="#!" onClick={(e) => e.preventDefault()}> {category.name}</a>
                </li>
              ))
            ) : (
              <p>No categories found</p>
            )}
          </ul>
        </aside>
      )}

      <div className="section">
        {loading ? (
          <p className="loading">Loading events...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : events.length > 0 ? (
          events.map((item) => (
            <div className="cardd" key={item._id}>
              <div className="cardd-image">
                <img src={item.imageurl || (Image)} alt={item.title} />
              </div>
              <div className="cardd-content">
                <div className="sec">
                  <span className="tag">{activeCategory?.name}</span>
                  <span className="date">
                    {new Date(item.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="read-more-btn" onClick={() => handleReadMore(item._id)}>
                  Read more <span>➤</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-items">No events available for this category.</p>
        )}
      </div>
    </main>
  );
};

export default Events;
