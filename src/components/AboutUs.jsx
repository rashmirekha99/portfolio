import React from "react";
// technologies
import c from "../assets/img/technologies/c.png";
import java from "../assets/img/technologies/java.png";
import html from "../assets/img/technologies/html.png";
import js from "../assets/img/technologies/js.png";
import react from "../assets/img/technologies/react.png";
import flutter from "../assets/img/technologies/flutter.png";
import python from "../assets/img/technologies/python.png";
import mysql from "../assets/img/technologies/my-sql.png";
import css from "../assets/img/technologies/css.png";
// tools
import jira from "../assets/img/technologies/jira.png";
import figma from "../assets/img/technologies/figma.png";
import trello from "../assets/img/technologies/trello.png";
import github from "../assets/img/technologies/github.png";
import netbeans from "../assets/img/technologies/netbeans.png";
import photoshop from "../assets/img/technologies/photoshop.png";
import androidstudio from "../assets/img/technologies/android studio.png";
import "./aboutus.css";
import LangContainer from "./LangContainer";

function AboutUs() {
  return (
    <div className="about-us">
      <h2>My Skills</h2>
      <p>
        I have hands-on experience with a variety of modern technologies and
        tools across software development. My expertise covers both frontend and
        backend technologies, ensuring the delivery of high-quality, efficient,
        and scalable solutions. Below are the key technologies I work with:
      </p>
      <h1>Technologies</h1>
      <div className="techno-row">
        {/* <div className="techno-col"> */}
        <LangContainer img={c} lang="C Programming" />
        <LangContainer img={java} lang="Java" />
        <LangContainer img={html} lang="HTML" />
        <LangContainer img={css} lang="CSS" />
        <LangContainer img={js} lang="Javascript" />
        <LangContainer img={react} lang="React" />
        <LangContainer img={flutter} lang="Flutter" />
        <LangContainer img={python} lang="Python" />
        <LangContainer img={mysql} lang="My SQL" />
        <LangContainer img={mysql} lang="My SQL" />
        {/* </div> */}
      </div>
      <h1>Tools</h1>
      <div className="techno-row tools">
        {/* <div className="techno-col"> */}
        <LangContainer img={jira} lang="Jira" />
        <LangContainer img={trello} lang="Trello" />
        <LangContainer img={photoshop} lang="Photoshop" />
        <LangContainer img={netbeans} lang="Netbeans" />
        <LangContainer img={figma} lang="Figma" />
        <LangContainer img={github} lang="Github" />
        <LangContainer img={androidstudio} lang="Android Studio" />
        <LangContainer img={python} lang="Python" />
        <LangContainer img={mysql} lang="My SQL" />
        <LangContainer img={mysql} lang="My SQL" />
        {/* </div> */}
      </div>
    </div>
  );
}

export default AboutUs;
