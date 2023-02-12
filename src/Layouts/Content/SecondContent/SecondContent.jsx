import React from "react";
import "./SecondContent.css";
import Button from "../../../component/Button/Button";
import Text from "../../../component/Text-decoration/Text-decoration";
import beach from "../../../assets/beach.png";
import world from "../../../assets/world.png";
import Cruises from "../../../assets/Cruises.png";
import landmark from "../../../assets/landmark.png";
import Discover_Nature from "../../../assets/Discover_Nature.png";
import Discover_Cities from "../../../assets/Discover_Cities.png";

const timeCountDown = [
  {
    timer: "000",
    unit: "days",
    sign: "/",
  },
  {
    timer: "00",
    unit: "hours",
    sign: "/",
  },
  {
    timer: "00",
    unit: "minutes",
    sign: "/",
  },
  {
    timer: "00",
    unit: "seconds",
  },
];

const travelBy = [
  {
    logo: world,
    transport: "World Tours",
    transportdes:
      "Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.",
  },
  {
    logo: Cruises,
    transport: "Cruises",
    transportdes:
      "Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.",
  },
  {
    logo: landmark,
    transport: "Best Tours",
    transportdes:
      "Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.",
  },
];

const SecondContent = () => {
  return (
    <div className="second-content-container">
      <div className="sub1">
        <div className="descriptions-about">
          <p className="north-america">north america</p>
          <Text
            firstName="The Best"
            lastName="Beaches"
            className="the-best-beach"
          />
          <p className="sub-title">
            Lorem ipsum dolor sit amet, consectetur adip iscing elit. Proin
            rhoncus urna dictum neque molestie ultricies mauris ac.
          </p>
          <p className="sub-title">
            Lorem ipsum dolor sit amet, consectetur adip iscing elit. Proin
            rhoncus urna dictum neque molestie ultricies mauris ac.
          </p>
          <div className="sub-price">
            <p className="sub-price1">800</p>
            500 $<p className="sub-price3">/ for person</p>
          </div>
          <Button className="btn-booknow-primary" name="book now" />
        </div>
        <div className="box-banner">
          <img src={beach} alt="" className="banner-about" />
          <div className="count-down">
            {timeCountDown &&
              timeCountDown.map((item, index) => {
                return (
                  <div className="time" key={index}>
                    <div className="about-time">
                      <div className="timer">{item.timer}</div>
                      <label htmlFor="" className="unit">
                        {item.unit}
                      </label>
                    </div>
                    <div className="sign">{item.sign}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="sub2">
        {travelBy &&
          travelBy.map((item, index) => {
            return (
              <div className="travel-by" key={index}>
                <img src={item.logo} alt="" className="travel-logo" />
                <div className="travel-des-by">
                  <div className="travel-transport">{item.transport}</div>
                  <div className="travel-transport-des">
                    {item.transportdes}
                  </div>
                  View More
                </div>
              </div>
            );
          })}
      </div>
      <div className="sub3">
        <div className="discover-cities">
          <img src={Discover_Cities} alt="" className="banenr1" />
          <div className="sub3-box1">
            <div className="sub1-title1">01. last minute</div>
            <div className="sub1-title2">Discover Cities</div>
            <Button className="details" name="details" />
          </div>
        </div>
        <div className="discover-nature">

        <img src={Discover_Nature} alt="" className="banner2" />
        <div className="sub3-box2">
          <div className="sub1-title1">02. promotions</div>
          <div className="sub1-title2">Discover nature</div>
          <Button className="details" name="details" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default SecondContent;
