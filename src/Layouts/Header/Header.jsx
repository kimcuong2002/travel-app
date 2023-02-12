import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import "./Header.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import HeaderNavbar from "./component/HeaderNavbar/HeaderNavbar";
import Text from "../../component/Text-decoration/Text-decoration";
import Button from "../../component/Button/Button";
import relax from "../../assets/relax.png";
import cultural from "../../assets/cultural.png";
import sport from "../../assets/sport.png";
import history from "../../assets/history.png";
import HeaderMenu from "../../component/HeaderMenu/HeaderMenu";

const headerActions = [
  {
    image: relax,
    name: "relax",
  },
  {
    image: cultural,
    name: "curtural",
  },
  {
    image: sport,
    name: "sport",
  },
  {
    image: history,
    name: "history",
  },
];

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="header-container">
      <div className="header">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        <HeaderNavbar />
        <Link to="/login">
          <CgProfile className="profile" href="login" />
        </Link>
        <img
          src={menu}
          className="menu"
          onClick={() => setOpenModal(true)}
        />
      </div>
      <div className="slide-bar">
        <div className="title">
          <Text firstName="search your next " lastName="holiday" />
          <div className="header-small-title">check our best promotins</div>
        </div>
        <div className="header-action__search">
          <input
            type="text"
            placeholder="Choose your Destination..."
            className="header-search__input"
          />
          <Button className="header-search__icon" icon={<AiOutlineSearch />} />
        </div>
        <div className="more_action">
          {headerActions &&
            headerActions.map((item, index) => {
              return (
                <div key={index} className="more-header__actions">
                  <img src={item.image} alt="" className="img-icon" />
                  <div className="name-icon">{item.name}</div>
                </div>
              );
            })}
        </div>
      </div>
      <HeaderMenu
        open={openModal}
        onClose={() => setOpenModal(false)}
        className={`pop-up__menu ${!openModal && 'pop-up__menu-close'}`}
      />
    </div>
  );
};

export default Header;
