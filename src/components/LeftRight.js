import React from "react";
import "./LeftRight.css";

function LeftRight() {
  return (
    <div className="container-container">
      <div className="container">
        <div className="left left-r"></div>
        <div className=" right right-r"></div>
      </div>
      <div className="container">
        <div className="left"></div>
        <div className="right right-s"></div>
      </div>
      <div className="container">
        <div className="left left-t"></div>
        <div className="right right-t"></div>
      </div>
      <div className="container">
        <div className="left left-g"></div>
        <div className="right right-g"></div>
      </div>
    </div>
  );
}

export default LeftRight;
