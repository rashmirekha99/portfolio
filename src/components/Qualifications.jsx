import React, { useState } from "react";
import "./qualification.css";
import img from "../assets/img/circle.png";
import Education from "./Education";
import Work from "./Work";

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
      {eduCliked ? <Education /> : <Work />}
    </section>
  );
}

export default Qualifications;
