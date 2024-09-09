import React from "react";
import "./heading.css";
import img from "../assets/img/photo.png";

function Heading() {
  return (
    <div className="main" id="home">
      <img src={img} />
      <div className="content">
        <p>Hi there 👋 My name is</p>
        <h1>RASHMI REKHA</h1>
        <h1>I'm a Software Engineer</h1>
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
