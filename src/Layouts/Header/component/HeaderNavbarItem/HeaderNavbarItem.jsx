import React from "react";
import "./HeaderNavbarItem.css"

const HeaderNavbarItem = ({ name, options }) => {
  return (
    <div className="navbar-item">
      <span className="navbar-item__name">{name}</span>
      {options && (
        <ul className="navbar-item__option">
          {options.map((item, key) => {
            return (
              <li className="navbar-item__option--item" key={key}>
                <a href="/#" className="navbar-item__option--item-link">{item}</a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default HeaderNavbarItem;
