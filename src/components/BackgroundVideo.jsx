import React from "react";
import backgroundVideo from "../assets/img/video.mp4"; // Import the video file
import "./backgroundVideo.css";
const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
