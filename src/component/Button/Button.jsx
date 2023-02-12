import React from "react";
import './Button.css';

const Button = ({name, icon, onClick, className}) => {
  return (
    <div onClick={onClick} className={`Button ${className}`}>
      {icon}
      {name}
    </div>
  );
};

export default Button;
