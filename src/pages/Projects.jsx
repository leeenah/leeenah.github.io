import React from "react";
import { Link } from "react-router-dom";

const Projects = ({ projects }) => (
  <article className="posts container">
    <h1>projects</h1>
    <ul>
      {projects.length < 1 && <li key="empty">No posts yet</li>}
      {projects.map((project) => (
        <li key={project.id}>
          <h2>
            <Link to={`/project/${project.slug}`}>{project.title}</Link>
          </h2>
        </li>
      ))}
    </ul>
  </article>
);

export default Projects;
