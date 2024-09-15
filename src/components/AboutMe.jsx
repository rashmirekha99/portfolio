import React from "react";
import img from "../assets/img/my-photo-2.png";
import { motion } from "framer-motion";
import "./aboutme.css";

function AboutMe() {
  return (
    <div className="about-me" id="about_me">
      <div className="about-me-image">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            ease: "easeIn",
            duration: 0.5,
          }}
          className="image-me"
          src={img}
          alt="my_image"
        ></motion.img>
      </div>
      <div className="about-me-content">
        <motion.h1
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 60 },
            ease: "easeIn",
            duration: 0.5,
          }}
        >
          About Me 👋
        </motion.h1>
        <motion.p
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 60 },
            ease: "easeIn",
            duration: 0.8,
          }}
        >
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
        </motion.p>
        <a href="#contact">
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              ease: "easeIn",
              duration: 0.5,
            }}
          >
            Get in Touch
          </motion.button>
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
