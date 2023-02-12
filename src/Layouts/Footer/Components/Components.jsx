import React from "react";
import "./Components.css";

const FooterItem = ({ name, options }) => {
  return (
    <div className="footer-options-box">
      <span className="footer-options-name">{name}</span>
      {options && (
        <ul className="footer-list">
          {options.map((item) => {
            return (
              <li className="footer-item__option">
                <a href="/#" className="footer-item__option-link">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FooterItem;
