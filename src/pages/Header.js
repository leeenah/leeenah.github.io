import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <h2 key="home">
        {/*Links to homepage */}
        <Link to="/">my site</Link>
      </h2>
    </header>
  );
};

export default Header;
