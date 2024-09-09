import React from "react";
import c from "../assets/img/technologies/c.png";

function AboutUs() {
  return (
    <div className="about-us">
      <h1>Skills</h1>
      <h2>Technologies</h2>
      <div className="techno-row">
        <div className="techno-col">
          <img src={c}></img>
          <p>C Programming</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
