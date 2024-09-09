import React from "react";
import logo from "../assets/img/logo.jpg";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaStackOverflow } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo}></img>
      </div>
      <div className="footer-icon">
        <FaGithub />
        <FaLinkedin />
        <MdEmail />
        <FaStackOverflow />
      </div>
    </div>
  );
}

export default Footer;
