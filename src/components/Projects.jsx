import React, { useState } from "react";
import "./project.css";
import img from "../assets/img/projects/foodmania.jpg";
import web from "../assets/img/projects/webApplication.jpg";
import bookswan from "../assets/img/projects/bookswan.jpg";
import grocery from "../assets/img/projects/groceryListing.jpg";
import cleanConnect from "../assets/img/projects/cleanConnect.jpg";
import pawprint from "../assets/img/projects/pawprint.jpg";
import portfolio from "../assets/img/projects/portfolio.jpg";

import { IoCloseSharp } from "react-icons/io5";
import { FadeInX, FadeInY } from "./animation/Animations";
import { BiBold } from "react-icons/bi";

function Projects() {
  const [isProjectClicked, setProjectClicked] = useState(false);
  const [projectNo, setProjectNo] = useState();
  const ProjectDetails = [
    {
      name: "Web Application",
      about:
        "A web application to showcase products, get client inquiries, and provide an admin panel for efficient data management",
      role: " Full Stack Development",
      technologies: " NextJS ,Tailwind CSS, ExpressJs, MongoDB, Vercel ",
      responsibilities: [
        "Design the UIs",
        "Develop the UIs ensuring responsiveness ",
        "Develop Admin Panel to manage website data",
        "Develop the backend and integrated APIs in website and Admin Panel",
        "Deploy developed application in Vercel",
      ],
    },
    {
      name: "Portfolio Website",
      about:
        "A portfolio website that showcases my skills, experience, and background, offering a comprehensive view of who I am as a professional. It includes a responsive design, ensuring an optimal viewing experience on any device",
      role: "Develop Full Website",
      technologies: "ReactJs, CSS, Netlify",
      responsibilities: [
        "Design the website",
        "Develop the website ensuring the responsiveness",
        "Deploy the website in Netlify",
      ],
      group: false,
    },
    {
      name: "Restaurant Management System",
      about:
        "A restaurant management system which can manage orders,delivery, offers, kitchen through one system. ",
      role: "Management Functionality Development",
      technologies: "ReactJs (with Ant Design) + Firebase +Flutter(mobile)",
      responsibilities: [
        "Orders Read, Orders status update",
        "Delivery tracking",
        "Offers creation",
      ],
    },
    {
      name: "Book Swan App",
      about: "An application designed for sharing and donating books",
      technologies: "Flutter(Mobile)",
      role: " Frontend Development",
      responsibilities: [
        "Develop the frontend by converting Figma designs into code",
      ],
    },
    {
      name: "Grocery Listing App",
      about:
        " A project that allows users to shop by sharing their lists with others, providing real-time updates. Additional features include finding shop directions on a map and digitally storing loyalty cards within the app",
      role: " Frontend Development",
      technologies: "Flutter(Mobile)",
      responsibilities: [
        "Convert Figma design into code",
        "API integration",
        "Develop list realtime sharing feature",
        "Develop Barcode scanning feature to add loyalty cards",
        "Google Map Integration to get directions for shops",
        "Playstore and Appstore Subscription integration",
      ],
    },
    {
      name: "Clean Connect App",
      about:
        "A system for a cleaning company that includes a mobile app, seperate app for tab, and web platform to manage cleaning tasks among cleaners.",
      technologies: " Flutter (for Mobile & Tab) +Firebase",
      role: " Frontend Development",
      responsibilities: [
        "Develop cleaners' chat feature",
        "Develop chat UI",
        "Firebase integration",
      ],
    },
    {
      name: "PAWPRINTID",
      about:
        "A system that allows pet owners to track their pets' vaccinations, health, and other important details.",
      role: "Frontend Development",
      technologies: "Flutter",
      responsibilities: ["Convert Figma Design to code", "API Integration"],
    },
  ];

  return (
    <div className="projects">
      <div
        className="project-section"
        id="projects"
        onClick={() => setProjectClicked(isProjectClicked ? false : true)}
      >
        <FadeInX delay={0.2} duration={0.1} side={-100}>
          {" "}
          <h1>Projects</h1>
        </FadeInX>
        <FadeInX delay={0.4} duration={0.1} side={100}>
          <p>
            Check out my projects that show my skills in design and development.
            Each one highlights my focus on creating practical and innovative
            solutions
          </p>
        </FadeInX>
        <div className="project-grid">
          <FadeInY delay={0.2} duration={0.3} side={100}>
            <div
              class="item"
              onClick={() => {
                setProjectNo(0);
                setProjectClicked(true);
              }}
            >
              <img src={web} alt="project"></img>
            </div>
          </FadeInY>
          <FadeInY delay={0.4} duration={0.5} side={100}>
            <div
              class="item"
              onClick={() => {
                setProjectNo(1);
                setProjectClicked(true);
              }}
            >
              <img src={portfolio} alt="project"></img>
            </div>
          </FadeInY>
          <FadeInY delay={0.2} duration={0.3} side={100}>
            <div
              class="item"
              onClick={() => {
                setProjectNo(2);
                setProjectClicked(true);
              }}
            >
              <img src={img} alt="project"></img>
              <div className="overlay">
                <p>mbsdhfvshvfvasjvfjhas</p>
              </div>
            </div>
          </FadeInY>
          <FadeInY delay={0.4} duration={0.3} side={100}>
            <div
              class="item"
              onClick={() => {
                setProjectNo(3);
                setProjectClicked(true);
              }}
            >
              <img src={bookswan} alt="project"></img>
            </div>
          </FadeInY>
          <FadeInY delay={0.6} duration={0.4} side={100}>
            <div
              class="item"
              onClick={() => {
                setProjectNo(4);
                setProjectClicked(true);
              }}
            >
              <img src={grocery} alt="project"></img>
            </div>
          </FadeInY>
          <FadeInY delay={0.2} duration={0.3} side={100}>
            <div
              class="item"
              onClick={() => {
                setProjectNo(5);
                setProjectClicked(true);
              }}
            >
              <img src={cleanConnect} alt="project"></img>
            </div>
          </FadeInY>
          <FadeInY delay={0.3} duration={0.4} side={100}>
            <div
              class="item"
              onClick={() => {
                setProjectNo(6);
                setProjectClicked(true);
              }}
            >
              <img src={pawprint} alt="project"></img>
            </div>
          </FadeInY>
        </div>
      </div>
      {/* {isProjectClicked ? <PopUp /> : null} */}
      {isProjectClicked ? (
        <alert className={isProjectClicked ? "pop-up active" : "pop-up"}>
          <div className="close-container">
            <IoCloseSharp
              className="close-icon"
              onClick={() => setProjectClicked(false)}
            />
          </div>

          <h1>{ProjectDetails[projectNo].name}</h1>
          <p style={{ color: "grey", paddingTop: 0 }}>
            {projectNo == 0 || projectNo == 1
              ? "Individual Project"
              : "Group Project"}
          </p>
          <p>
            <span className="project-text">About Project:</span>{" "}
            {ProjectDetails[projectNo].about}
          </p>
          <p>
            {" "}
            <span className="project-text">Technologies: </span>
            {ProjectDetails[projectNo].technologies}
          </p>
          <p>
            <span className="project-text">Job Role:</span>
            {ProjectDetails[projectNo].role}
          </p>
          <p>
            <span className="project-text">Responsibility:</span>
          </p>
          <ul>
            {ProjectDetails[projectNo].responsibilities.map((res) => (
              <li>
                <p>{res}</p>
              </li>
            ))}
            <p style={{ fontStyle: "bold" }}>
              Link To The Wesite :{" "}
              <a href="https://www.nrcbaggage.lk/" target="_blank">
                www.nrcbaggage.lk
              </a>
            </p>
          </ul>
        </alert>
      ) : null}
    </div>
  );
}

export default Projects;
