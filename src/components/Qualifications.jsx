import React, { useState } from "react";
import "./qualification.css";
import img from "../assets/img/circle.png";

function Qualifications() {
  const [eduCliked, setEduClicke] = useState(true);
  const [workClicked, setWorkClicked] = useState(false);
  const onclick = () => {
    setWorkClicked(!workClicked);
    setEduClicke(!eduCliked);
  };
  return (
    <section className="quallifications">
      <h1>Qualifications</h1>
      <div className="button-container">
        <button onClick={onclick} className={eduCliked ? "active" : null}>
          Education
        </button>
        <button className={workClicked ? "active" : null} onClick={onclick}>
          Work
        </button>
      </div>
      {/* education ladder */}
      <div className="edu-content">
        <div className="edu-content-sub left-container">
          <img src={img}></img>
          <div className="text-box">
            <h4>BSc.(Hons.) in Information Technology & Management</h4>
            <p>University of Moratuwa | 2024</p>

            <p>GPA : 3.45</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="edu-content-sub right-container">
          <img src={img}></img>
          <div className="text-box">
            <h4>G.C.E. Advanced Level Examination</h4>
            <p>Devi Balika Vidyalaya | 2018</p>

            <p>2As’ and 1B for IT, Econ, Accounting</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div className="edu-content-sub left-container">
          <div className="text-box">
            <h4>Lanka Institute Of Technological Studies</h4>
            <p>2016</p>

            <p>
              Software Engineering Course - Diploma Level Computer Science -
              Certificate Level Graphic Designing Course - Certificate Level
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="edu-content-sub right-container">
          <div className="text-box">
            <h4>G.C.E Ordinary Level Examination</h4>
            <p>Vidyakara Girls ' School - Maharagama - 2015</p>

            <p>8As ' and 1B</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualifications;
