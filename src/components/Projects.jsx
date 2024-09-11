import React from "react";
import "./project.css";
import img from "../assets/img/projects/foodmania.jpg";
import bookswan from "../assets/img/projects/bookswan.jpg";
import grocery from "../assets/img/projects/groceryListing.jpg";
import cleanConnect from "../assets/img/projects/cleanConnect.jpg";
import pawprint from "../assets/img/projects/pawprint.jpg";
import research from "../assets/img/projects/research.jpg";

function Projects() {
  return (
    <div className="project-section" id="projects">
      <h1>Projects</h1>
      <p>
        Here you will find a curated selection of projects that showcase my
        expertise in design and development, each a reflection of my dedication
        to marrying form with function and innovation with execution.
      </p>
      <div className="project-grid">
        <div class="item">
          <img src={img}></img>
          <div className="overlay">
            <p>mbsdhfvshvfvasjvfjhas</p>
          </div>
        </div>
        <div class="item">
          <img src={bookswan}></img>
        </div>
        <div class="item">
          <img src={grocery}></img>
        </div>
        <div class="item">
          <img src={cleanConnect}></img>
        </div>
        <div class="item">
          <img src={pawprint}></img>
        </div>
        <div class="item">
          <img src={research}></img>
        </div>
      </div>
    </div>
  );
}

export default Projects;
