import React from "react";

import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="AboutMe">
      <h1>Hello, I'm Lena</h1>
      <h3>I discovered programming by accident and now I'm addicted 👩🏻‍💻</h3>
      <br />
      <p>
        I come from an accounting and architecture background. Software
        development interests me because it's very similar to architecture -
        <em>
          {" "}
          design and build functional things for people to use and experience,{" "}
        </em>
        except it's achieved through a different medium.
      </p>
      <p>
        Given that there isn't a lot to do these days because we're still in
        lockdown, you will find me coding to build my knowledge and skills. I
        also enjoy filming/editing videos, cycling, snowboarding and cooking.
      </p>
      <p>
        I am seeking opportunities to further develop my skills and I would love
        to work with you in your next project and bring it to life together -{" "}
        <a href="mailto:lenazhangx@gmail.com">lets get in touch!</a>
      </p>
    </div>
  );
}
