import { useState } from "react";
import "../App.css";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [isSideBarLoad, setSideBarLoad] = useState(false);
  const toggleClick = () => {
    console.log("Clicked");
    setSideBarLoad(!isSideBarLoad);
  };
  return (
    <>
      <div className="header">
        <h2>Rashmi Rekha</h2>
        {/* usual */}
        <nav className={isSideBarLoad ? "navbar active" : "navbar"}>
          <ul>
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
        </nav>
        {!isSideBarLoad ? (
          <GiHamburgerMenu className="menu-icon" onClick={toggleClick} />
        ) : null}

        {/* mobile */}
        {/* <nav className="sidebar">
          <ul>
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
        </nav> */}
      </div>
    </>
  );
}
