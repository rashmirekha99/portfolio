import React from "react";
import "./qualification.css";
import img from "../assets/img/circle.png";

function Work() {
  return (
    <div className="edu-content">
      <div className="edu-content-sub left-container">
        <img src={img} alt="education"></img>
        <div className="text-box">
          <h4>Associate Software Engineer</h4>
          <p>Hasthiya IT</p>
          <p>Part Time | 2023 Sep- 2024 March</p>

          <span className="left-container-arrow"></span>
        </div>
      </div>
      <div className="edu-content-sub right-container">
        <img src={img}></img>
        <div className="text-box">
          <h4>Intern Software Engineer</h4>
          <p>Hasthiya IT I 2022 Dec-2023 June </p>

          <p>2As’ and 1B for IT, Econ, Accounting</p>
          <span className="right-container-arrow"></span>
        </div>
      </div>
    </div>
  );
}

export default Work;
