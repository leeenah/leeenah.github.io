import React, { useState } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu.jsx";
import "./index.css";

export default function MainPage() {
  const [isShowingMenu, setIsShowingMenu] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    showMenu();
  }

  function showMenu() {
    if (isShowingMenu) {
      setIsShowingMenu(false);
    } else {
      setIsShowingMenu(true);
    }

    // console.log("before change: " + isShowingMenu);
    // var toggleValue = !isShowingMenu; //! negates it (does the opposite)
    // console.log("after change: " + toggleValue);
    // setIsShowingMenu(!isShowingMenu);
  }

  return (
    <div className="MainPage">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>quick intro</p>
            <h1>
              Hello, I'm Lena.
              <br />I am a self-taught developer based in Vancouver, Canada.
            </h1>
            <br />

            <div>
              <p>
                <i class="fas fa-long-arrow-alt-right"></i>
                <Link to="/ContactInfo"> lets collab</Link>
              </p>
            </div>

            <div>
              <p>
                <i className="fas fa-long-arrow-alt-right"></i>
                {/* Link component is an internal redirectory. Use <a href></a> for external links */}
                <Link to="/AboutMe"> more about me</Link>
              </p>
            </div>
          </div>

          <div className="col">
            <div className="menu">
              <Link to="/Menu" onClick={handleClick}>
                <i class="fas fa-plus"></i> menu
              </Link>
              {isShowingMenu && <Menu />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
