import React from "react";

import { Link } from "react-router-dom";

const Menu = () => (
  <div className="Menu">
    <ul>
      <li>
        <Link to="/Projects">Projects</Link>
      </li>
      <li>
        <Link to="/AboutMe">About Me</Link>
      </li>
      <li>
        <Link to="/ContactInfo">Contact Me</Link>
      </li>
    </ul>
  </div>
);

export default Menu;
