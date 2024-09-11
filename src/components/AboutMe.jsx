import React from "react";
import img from "../assets/img/my-photo-2.png";
import "./aboutme.css";

function AboutMe() {
  return (
    <div className="about-me" id="about_me">
      <div className="about-me-image">
        <img className="image-me" src={img} alt="my_image"></img>
      </div>
      <div className="about-me-content">
        <h1>About Me 👋</h1>
        <p>
          Hey there! I’m Rashmi Rekha, <br />
          <br />a passionate software developer 🚀 with a love for creating
          innovative and user-friendly solutions. My expertise spans both
          frontend 🎨 and backend ⚙️ development, allowing me to build seamless
          experiences from start to finish. I’m all about turning ideas 💡 into
          reality with clean, efficient code and a creative touch.
          <br />
          <br /> I work with a variety of technologies, including ReactJS ,
          Flutter , Node.js , and CSS . My mission is to deliver digital
          experiences that not only function flawlessly but also make users'
          lives easier and more enjoyable 😄. <br />
          <br />
          When I’m not coding 💻, you’ll find me exploring the latest tech
          trends 📱, reading 📚, or brainstorming my next big idea 🤔. I’m
          always up for a challenge and love collaborating with others to create
          something amazing 🌟. Let’s build something incredible together! 🚀✨
        </p>
        <button>Get in Touch</button>
      </div>
    </div>
  );
}

export default AboutMe;
