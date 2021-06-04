import React, { useState } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function MainPage() {
  return (
    <div className="MainPage">
      <div className="container">
        <div className="row">
          <div className="col">
            <p style={{ color: "#83878D" }}>quick intro</p>
            <h1>
              Hello, I'm Lena.
              <br />I am a self-taught developer based in Vancouver, Canada.
            </h1>
            <br />

            <div>
              <p>
                <i className="fas fa-long-arrow-alt-right"></i>
                {/* Link component is an internal redirectory. Use <a href></a> for external links */}
                <Link className="Link" to="/Projects">
                  {" "}
                  my work
                </Link>
              </p>
            </div>
            <div>
              <p>
                <i className="fas fa-long-arrow-alt-right"></i>
                <a className="lets-collab" href="mailto:lenazhangx@gmail.com">
                  {" "}
                  lets collab
                </a>
              </p>
            </div>

            <div>
              <p>
                <i className="fas fa-long-arrow-alt-right"></i>
                {/* Link component is an internal redirectory. Use <a href></a> for external links */}
                <Link className="Link" to="/AboutMe">
                  {" "}
                  more about me
                </Link>
              </p>
            </div>
            <div className="social-media-icons">
              <a
                href="https://github.com/leeenah"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-github-square"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/lena-zhang-61401193/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/leeenahcodes"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-twitter-square"></i>
              </a>
            </div>
          </div>

          <div className="col">
            <div className="menu"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
