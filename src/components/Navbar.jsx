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
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <img src={img} />
          </div>
          <ul className={isOpen ? "nav-link active" : "nav-link"}>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Me</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Contact</a>
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
