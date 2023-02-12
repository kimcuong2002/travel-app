import React from "react";
import "./Footer.css";
import Button from ".././../component/Button/Button";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import FooterItem from "../Footer/Components/Components";
import { footerDatas } from "../Footer/Components/footerdatas";

const Footer = ({ options }) => {
  return (
    <div className="footer-container">
      <div className="footer-title-search">
        <div className="footer-title">
          <div className="footer-firsttitle">keep in touch</div>
          <div className="footer-secondtitle">Travel with Us</div>
        </div>
        <div className="footer-search">
          <input type="text" className="footer-search-send" />
          <Button className="btn-send" name="send" />
        </div>
      </div>
      <div className="footer-box">
        <div className="footer-content-about">
          <div className="footer-description">
            <div className="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ut diam et nibh <p>condimentum</p> venenatis eu ac magnasin.
              Quisque interdum est mauris, eget ullamcorper.
            </div>
            <div className="footer-icon">
              <BsTwitter className="icon" />
              <ImYoutube className="icon" />
              <FaFacebookF className="icon" />
              <AiFillInstagram className="icon" />
            </div>
          </div>
          <div className="footer-description-options">
            {footerDatas &&
              footerDatas.map((item, index) => {
                return (
                  <FooterItem
                    key={index}
                    name={item.name}
                    options={item.options}
                  />
                );
              })}
          </div>
        </div>
        <div className="footer-last">
          <p className="the-best-travel">the best wordpress travel theme</p>
          <p className="copyright">copyright nicdark themes 2018</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
