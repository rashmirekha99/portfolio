import React from "react";
import logo from "../assets/img/logo.jpg";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaStackOverflow } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  const github = "https://github.com/rashmirekha99";
  const linkedin = "https://www.linkedin.com/in/rashmi-kothalawala-6a9479220/";
  const emai = "mailto:krashmirekha99@gmail.com";
  const stackoverflow = "https://stackoverflow.com/users/19049865/rashmi-rekha";
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo}></img>
      </div>
      <div className="footer-icon">
        <a href={github} target="_blank">
          <FaGithub />
        </a>
        <a href={linkedin} target="_blank">
          <FaLinkedin />
        </a>
        <a href={emai} target="_blank">
          <MdEmail />
        </a>
        <a href={stackoverflow} target="_blank">
          <FaStackOverflow />
        </a>
      </div>
    </div>
  );
}

export default Footer;
