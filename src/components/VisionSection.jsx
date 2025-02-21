import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../src/index.css';

const VisionSection = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get("https://disha-server.onrender.com/api/vision/videos");
        console.log("Fetched response:", response.data);

        if (response.data.length > 0 && response.data[0].videoUrl) {
          const fullUrl = response.data[0].videoUrl.startsWith("http")
            ? response.data[0].videoUrl
            : `https://disha-server.onrender.com/uploads/${response.data[0].videoUrl}`;
          
          setVideoUrl(fullUrl);
        } else {
          setError("No video available");
        }
      } catch (err) {
        setError("Failed to load video");
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, []);

  return (
    <section className="vision-section">
      <h3>Prime Minister's Vision as DISHAAI's Mission</h3>
      <div className="video-container">
        {loading ? (
          <p>Loading video...</p>
        ) : error ? (
          <p>{error}</p>
        ) : videoUrl ? (
          <video key={videoUrl} controls className="video-player">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>No video available</p>
        )}
      </div>
    </section>
  );
};

export default VisionSection;
