import React from "react";
import "./qualification.css";
import img from "../assets/img/circle.png";
import { FadeInX } from "./animation/Animations";
import logo from "../assets/img/uom.png";
import scl_logo from "../assets/img/school_logo.png";
import lits from "../assets/img/lits.jpeg";
import scl_logo2 from "../assets/img/scl2.jpeg";

function Education() {
  return (
    <div className="edu-content">
      <div className="edu-content-sub left-container">
        <img src={img} alt="my_photo_2"></img>

        <FadeInX delay={0.1} duration={0.1} side={-100}>
          <div className="text-box">
            <div
              className="logo-image"
              style={{ backgroundImage: `url(${logo})` }}
            />

            <div>
              <h4>BSc.(Hons.) in Information Technology & Management</h4>
              <p>University of Moratuwa | 2024</p>
            </div>
            {/* <p>Graduated with Second Class Upper Division</p> */}
            <span className="left-container-arrow"></span>
          </div>
        </FadeInX>
      </div>
      <div className="edu-content-sub right-container">
        <img src={img} alt="circle"></img>
        <FadeInX delay={0.1} duration={0.3} side={100}>
          <div className="text-box">
            <div
              className="logo-image"
              style={{ backgroundImage: `url(${scl_logo})` }}
            />
            <div>
              <h4>G.C.E. Advanced Level Examination</h4>
              <p>Devi Balika Vidyalaya | 2018</p>

              <p>2As’ and 1B for IT, Econ, Accounting</p>
            </div>
            <span className="right-container-arrow"></span>
          </div>
        </FadeInX>
      </div>
      <div className="edu-content-sub left-container">
        <img src={img} alt="circle"></img>
        <FadeInX delay={0.1} duration={0.5} side={-100}>
          <div className="text-box">
            <div
              className="logo-image"
              style={{ backgroundImage: `url(${lits})` }}
            />
            <div>
              <h4>Lanka Institute Of Technological Studies</h4>
              <p>2016</p>

              <p>
                Software Engineering Course - Diploma Level
                <br /> Computer Science - Certificate Level <br />
                Graphic Designing Course - Certificate Level
              </p>
            </div>
            <span className="left-container-arrow"></span>
          </div>
        </FadeInX>
      </div>
      <div className="edu-content-sub right-container">
        <img src={img} alt="circle"></img>
        <FadeInX delay={0.1} duration={0.7} side={100}>
          <div className="text-box">
            <div
              className="logo-image"
              style={{ backgroundImage: `url(${scl_logo2})` }}
            />
            <div>
              <h4>G.C.E Ordinary Level Examination</h4>
              <p>Vidyakara Girls ' School - Maharagama - 2015</p>

              <p>8As ' and 1B</p>
            </div>
            <span className="right-container-arrow"></span>
          </div>
        </FadeInX>
      </div>
    </div>
  );
}

export default Education;
