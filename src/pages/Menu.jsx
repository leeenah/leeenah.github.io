import React from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/AboutMe">About Me</Link>
        </li>
        <li>
          <a href="mailto:lenazhangx@gmail.com"> Contact Me</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
