import React from "react";
import "./heading.css";
import img from "../assets/img/photo.png";
import TextChanger from "./AnimateText";

function Heading() {
  return (
    <div className="main" id="home">
      <img src={img} />
      <div className="content">
        <p>Hi there 👋 My name is</p>
        <h1>RASHMI REKHA</h1>
        <div className="animatedText">
          <h1>I'm a </h1>
          <TextChanger />
        </div>

        <p>
          I am a self-motivated, confident, and responsible undergraduate who
          has the ability of hard work and logical thinking and I am a quick
          learner working with enthusiasm. I particularly enjoy collaborative
          teamwork, where I can contribute and learn alongside others.
        </p>
        <button>Get in Touch</button>
      </div>
    </div>
  );
}

export default Heading;
