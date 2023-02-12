import React from "react";
import { navbarOptions } from "../../../../utils/const";
import HeaderNavbarItem from "../HeaderNavbarItem/HeaderNavbarItem";
import "./HeaderNavbar.css";
 
const HeaderNavbar = () => {
  return (
    <div className="header-navbar">
      {navbarOptions &&
        navbarOptions.map((item, index) => {
          return (
            <HeaderNavbarItem
              key={index}
              name={item.name}
              options={item.options}
            />
          );
        })}
    </div>
  );
};

export default HeaderNavbar;
