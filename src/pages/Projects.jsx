import React from "react";

import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      name: "Weather Application",
      link: "https://wizardly-kare-f2f8f1.netlify.app/",
      technologies: "React, Javascript, HTML, CSS, REST API",
      description:
        "Displays the current weather information in your current location or a location of your interest. It also displays a three hourly weather forecast. Features includes a current location button and temperature unit conversion.",
    },
    {
      name: "Dictionary Application",
      link: "https://quizzical-shirley-3e170a.netlify.app/",
      technologies: "React, Javascript, HTML, CSS, REST API",
      description:
        "Word search engine that provides definitions and audio of the word.",
    },
  ];

  return (
    <div className="project-container">
      <h1>Here are some examples of my work</h1>
      <h3>including this website</h3>
      <br />
      <ul>
        {projects.map((project) => (
          <li>
            <i className="fas fa-long-arrow-alt-right"></i>
            <a href={project.link} target="_blank" rel="noreferrer">
              {project.name}
            </a>
            <p> {project.technologies}</p>
            <div className="project-description">
              <p>{project.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
