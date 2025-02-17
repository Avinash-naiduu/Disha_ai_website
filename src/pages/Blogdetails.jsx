import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/Blogdetails.css";
import Image from "../assets/DishaAI_Logo.png"

const Blog = () => {
  const { id } = useParams();
  console.log("events", id)
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEventDetails();
  }, [id]);

  const fetchEventDetails = async () => {
    try {
      const response = await fetch(`https://disha-server.onrender.com/api/content/${id}`);
      const result = await response.json();

      console.log("Fetched Blog Data:", result);

      if (!result || !result.data) {
        throw new Error("Invalid API response");
      }

      setEventData(result.data);
    } catch (err) {
      console.error("Error fetching event details:", err);
      setError("Failed to load event details");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="loading">Loading event details...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <main className="py-5 mt-5">
      <div className="container">
        {/* Blog Title */}
        <h1 className="blog-title">{eventData?.title || "No Title Available"}</h1>

        {/* Blog Date + Category Name */}
        <div className="blog-meta">
          <p className="blog-date">
            {eventData?.createdAt
              ? new Date(eventData.createdAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })
              : "Unknown"}
          </p>
          <span className="blog-category">{eventData?.category.name}</span>


          {/* Buttons */}
          <div className="buttons">
            <button className="contact-us-btn">Contact us</button>
            <button className="join-us-btn">Join us</button>
          </div>
        </div>

        {/* Blog Image */}
        <div className="blog-image-container">
          <img src={eventData?.imageurl || (Image)} alt="Blog Visual" className="blog-image" />
        </div>

        {/* Blog Description */}
        <div className="mt-4">
          <p className="blog-content">{eventData?.description || "No description available."}</p>
        </div>
      </div>
    </main>
  );
};

export default Blog;