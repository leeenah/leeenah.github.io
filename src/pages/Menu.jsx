import React from "react";
import Nav from "react-bootstrap/Nav";

export default function Menu() {
  return (
    <div className="Menu">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link eventKey="link-1">Projects</Nav.Link>
        <Nav.Link eventKey="link-2">About Me</Nav.Link>
        <Nav.Link eventKey="link-3">Contact </Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
    </div>
  );
}
