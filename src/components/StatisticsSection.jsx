import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../src/index.css';

const StatisticsSection = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("https://disha-server.onrender.com/api/counter");
        setStats(response.data); // Assuming the API returns an array of stats
        setLoading(false);
      } catch (error) {
        setError("Failed to load stats");
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="statistics-section">
      {loading ? (
        <p>Loading statistics...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        stats.map((stat, index) => (
          <div className="stat-item" key={stat._id}>
            <h2>{stat.count.toLocaleString()}</h2>
            <p className={`stat-item${index}`}>{stat.title}</p>
          </div>
        ))
      )}
    </section>
  );
};

export default StatisticsSection;
