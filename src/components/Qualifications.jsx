import React, { useState } from "react";
import "./qualification.css";
import img from "../assets/img/circle.png";
import Education from "./Education";
import Work from "./Work";
import { FadeIn } from "./animation/Animations";
import { FadeInY } from "./animation/Animations";

function Qualifications() {
  const [eduCliked, setEduClicke] = useState(true);
  const [workClicked, setWorkClicked] = useState(false);
  const onclick = () => {
    setWorkClicked(!workClicked);
    setEduClicke(!eduCliked);
  };
  return (
    <section className="quallifications">
      <FadeInY delay={0.2} duration={0.5}>
        <h1>Qualifications</h1>
      </FadeInY>
      <FadeInY delay={0.2} duration={0.8}>
        <div className="button-container">
          <button onClick={onclick} className={eduCliked ? "active" : null}>
            Education
          </button>
          <button className={workClicked ? "active" : null} onClick={onclick}>
            Work
          </button>
        </div>
      </FadeInY>
      {eduCliked ? <Education /> : <Work />}
    </section>
  );
}

export default Qualifications;
