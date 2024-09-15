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
            duration: 0.2,
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
          <br />
          🎓 A proud graduate of the University of Moratuwa, I am passionate
          about developing innovative and user-friendly solutions 💡. A quick
          learner 🚀, I constantly explore new ways to solve problems and
          embrace challenges with curiosity.
          <br /> <br />
          I love working in teams 🤝, collaborating on projects, and sharing
          knowledge to help others grow 🌱. I’m always open to advice and
          feedback, as I believe learning from others helps me grow and evolve
          continuously 📚. Whether it’s adapting to new environments or learning
          fresh technologies, I thrive on flexibility and continuous
          improvement.
          <br />
          <br /> From web to mobile 💻📱, I’m dedicated to building in creating
          attractive, convenient, and efficient web and mobile solutions, always
          striving to build digital experiences that leave a lasting impact.
          Let’s build something incredible together! 🚀✨
          <br />
          <br />
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
