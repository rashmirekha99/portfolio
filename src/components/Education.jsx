import React from "react";
import "./qualification.css";
import img from "../assets/img/circle.png";

function Education() {
  return (
    <div className="edu-content">
      <div className="edu-content-sub left-container">
        <img src={img} alt="my_photo_2"></img>
        <div className="text-box">
          <h4>BSc.(Hons.) in Information Technology & Management</h4>
          <p>University of Moratuwa | 2024</p>

          {/* <p>Graduated with Second Class Upper Division</p> */}
          <span className="left-container-arrow"></span>
        </div>
      </div>
      <div className="edu-content-sub right-container">
        <img src={img} alt="circle"></img>
        <div className="text-box">
          <h4>G.C.E. Advanced Level Examination</h4>
          <p>Devi Balika Vidyalaya | 2018</p>

          <p>2As’ and 1B for IT, Econ, Accounting</p>
          <span className="right-container-arrow"></span>
        </div>
      </div>
      <div className="edu-content-sub left-container">
        <img src={img} alt="circle"></img>
        <div className="text-box">
          <h4>Lanka Institute Of Technological Studies</h4>
          <p>2016</p>

          <p>
            Software Engineering Course - Diploma Level
            <br /> Computer Science - Certificate Level <br />
            Graphic Designing Course - Certificate Level
          </p>
          <span className="left-container-arrow"></span>
        </div>
      </div>
      <div className="edu-content-sub right-container">
        <img src={img} alt="circle"></img>
        <div className="text-box">
          <h4>G.C.E Ordinary Level Examination</h4>
          <p>Vidyakara Girls ' School - Maharagama - 2015</p>

          <p>8As ' and 1B</p>
          <span className="right-container-arrow"></span>
        </div>
      </div>
    </div>
  );
}

export default Education;
