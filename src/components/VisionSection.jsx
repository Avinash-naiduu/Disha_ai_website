import React from 'react';
import '../../src/index.css';
import Video from "../assets/Prime ministers vision as DISHAAIs mission.mp4";

const VisionSection = () => {
  return (
    <section className="vision-section">
      <h3>Prime Minister's Vision as DISHAAI's Mission</h3>
      <div className="video-container">
        <video controls className="video-player">
          <source src={Video} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VisionSection;
