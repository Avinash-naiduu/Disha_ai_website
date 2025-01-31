import React from 'react';
import '../../src/index.css';

const StatisticsSection = () => {
  return (
    <section className="statistics-section">
      <div className="stat-item">
        <h2>5</h2>
        <p className="stat-item0">No. of states covered</p>
      </div>
      <div className="stat-item">
        <h2>120</h2>
        <p className="stat-item1">No. of Schools Covered</p>
      </div>
      <div className="stat-item">
        <h2>12,000</h2>
        <p className="stat-item2">No. of Students Covered</p>
      </div>
    </section>
  );
};

export default StatisticsSection;
