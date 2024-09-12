import React from "react";
import "../navbar.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import img from "../assets/img/logo.jpg";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  //   const [isOnceClicked, setIsOnceClicked] = useState(false);
  const toggleClick = () => {
    console.log(isOpen);
    // setIsOnceClicked(true);
    setIsOpen(!isOpen);
  };

  // const scrollToSection = (id) => {
  //   const section = document.getElementById(id);
  //   section.scrollIntoView({ behavior: "smooth" });
  // };
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <img src={img} alt="logo" />
          </div>
          <ul className={isOpen ? "nav-link active mobile" : "nav-link"}>
            <li onClick={toggleClick}>
              <a href="#home">Home</a>
            </li>
            <li onClick={toggleClick}>
              <a href="#about_me">About Me</a>
            </li>
            <li onClick={toggleClick}>
              <a href="#projects">Projects</a>
            </li>
            <li onClick={toggleClick}>
              <a href="#skills">Skills</a>
            </li>
            <li onClick={toggleClick}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="icon" onClick={toggleClick}>
            <GiHamburgerMenu className="menu-icon" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
