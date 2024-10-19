import React from "react";
import "./qualification.css";
import img from "../assets/img/circle.png";
import { FadeInX } from "./animation/Animations";
import hasthiya from "../assets/img/hasthiya.jpg";

function Work() {
  return (
    <div className="edu-content">
      <div className="edu-content-sub left-container">
        <img src={img} alt="education"></img>
        <FadeInX delay={0.2} duration={0.5} side={-100}>
          <div className="text-box">
            <div
              className="logo-image"
              style={{ backgroundImage: `url(${hasthiya})` }}
            />
            <div>
              <h4>Associate Software Engineer</h4>
              <p>Hasthiya IT</p>
              <p>Part Time | 2023 Sep- 2024 March</p>
            </div>
            <span className="left-container-arrow"></span>
          </div>
        </FadeInX>
      </div>
      <div className="edu-content-sub right-container">
        <img src={img} alt="education"></img>
        <FadeInX delay={0.2} duration={0.8} side={100}>
          <div className="text-box">
            <div
              className="logo-image"
              style={{ backgroundImage: `url(${hasthiya})` }}
            />
            <div>
              <h4>Intern Software Engineer</h4>
              <p>Hasthiya IT </p>

              <p>Full Time | 2022 Dec-2023 June</p>
            </div>
            <span className="right-container-arrow"></span>
          </div>
        </FadeInX>
      </div>
    </div>
  );
}

export default Work;
