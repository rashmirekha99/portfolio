import React from "react";
import "./qualification.css";
import img from "../assets/img/circle.png";
import { FadeInX } from "./animation/Animations";

function Work() {
  return (
    <div className="edu-content">
      <div className="edu-content-sub left-container">
        <img src={img} alt="education"></img>
        <FadeInX delay={0.2} duration={0.5} side={-100}>
          <div className="text-box">
            <h4>Associate Software Engineer</h4>
            <p>Hasthiya IT</p>
            <p>Part Time | 2023 Sep- 2024 March</p>

            <span className="left-container-arrow"></span>
          </div>
        </FadeInX>
      </div>
      <div className="edu-content-sub right-container">
        <img src={img} alt="education"></img>
        <FadeInX delay={0.2} duration={0.8} side={100}>
          <div className="text-box">
            <h4>Intern Software Engineer</h4>
            <p>Hasthiya IT </p>

            <p>Full Time | 2022 Dec-2023 June</p>
            <span className="right-container-arrow"></span>
          </div>
        </FadeInX>
      </div>
    </div>
  );
}

export default Work;
