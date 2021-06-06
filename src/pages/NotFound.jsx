import React from "react";

export default function NotFound() {
  const divStyle = {
    textAlign: "center",
    paddingTop: 30,
  };

  return (
    <div className="NotFound" style={divStyle}>
      <h2> 404 Error! Page not found 😅 </h2>
    </div>
  );
}
