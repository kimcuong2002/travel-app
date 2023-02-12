import React from "react";
import "./Text-decoration.css";

const Text = ({ firstName, lastName, className }) => {
  return (
    <div className={`text ${className}`}>
      <p>{firstName}</p>
      <p>{lastName}</p>
    </div>
  );
};

export default Text;
