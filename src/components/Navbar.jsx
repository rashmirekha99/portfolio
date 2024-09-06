import React from "react";
import "../navbar.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  const [isSideBarLoad, setSideBarLoad] = useState(false);
  const [isOnceClicked, setIsOnceClicked] = useState(false);
  const toggleClick = () => {
    console.log(isSideBarLoad);
    setIsOnceClicked(true);
    setSideBarLoad(!isSideBarLoad);
  };
  return (
    <header>
      <div className="container">
        <nav className="nav-link">
          <div className="logo">
            <h2>Rashmi Rekha</h2>
          </div>
          <ul
            className={isSideBarLoad ? "list active" : "list"}
            // style={
            //   isSideBarLoad
            //     ? { display: "block" }
            //     : !isSideBarLoad && isOnceClicked
            //     ? { display: "none" }
            //     : {}
            // }
          >
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
          <div className="icon">
            <GiHamburgerMenu className="menu-icon" onClick={toggleClick} />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
