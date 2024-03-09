import React from "react";
import "./3Dbutton.css"; // Assuming you have a separate CSS file

const Button = ({ message, func }) => {
  return (
    <button className="pushable" onClick={func}>
      <span className="front">{message}</span>
    </button>
  );
};

export default Button;
