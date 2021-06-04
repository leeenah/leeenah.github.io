import React from "react";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="project-container">
      <h1>Here are some examples of my work</h1>
      <h3>including this website</h3>
      <br />
      <ul>
        <li>
          <i className="fas fa-long-arrow-alt-right"></i>
          <a
            href="https://wizardly-kare-f2f8f1.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Weather Application{" "}
          </a>
        </li>
        <p> React, Javascript, HTML, CSS, API</p>
        <li>
          <i className="fas fa-long-arrow-alt-right"></i>
          <a
            href="https://quizzical-shirley-3e170a.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Dictionary Application{" "}
          </a>
        </li>
        <p> React, Javascript, HTML, CSS, API</p>
      </ul>
    </div>
  );
};

export default Projects;
