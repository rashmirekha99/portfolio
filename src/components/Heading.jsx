import React from "react";
import { motion } from "framer-motion";
import "./heading.css";
import img from "../assets/img/photo.png";
import TextChanger from "./AnimateText";

function Heading() {
  return (
    <div className="main" id="home">
      <motion.img
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          ease: "easeIn",
          duration: 1,
        }}
        src={img}
        alt="logo"
      />
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          ease: "easeIn",
          duration: 0.5,
        }}
        className="content"
      >
        <motion.p
          transition={{
            duration: 0.1,
          }}
          className="hi"
        >
          Hi there 👋 My name is
        </motion.p>
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            ease: "easeIn",
            duration: 0.5,
          }}
        >
          RASHMI REKHA
        </motion.h1>
        <div className="animatedText">
          <h1>I'm a </h1>
          <TextChanger />
        </div>

        <p className="sub-text">
          I am a self-motivated, confident, and responsible undergraduate who
          has the ability of hard work and logical thinking and I am a quick
          learner working with enthusiasm. I particularly enjoy collaborative
          teamwork, where I can contribute and learn alongside others.
        </p>
        <a href="#contact">
          {" "}
          <button>Get in Touch</button>
        </a>
      </motion.div>
    </div>
  );
}

export default Heading;
