import React from "react";
import Text from "../../../component/Text-decoration/Text-decoration";
import "./FirstContent.css";
import { firstdatasproduct } from "../datas-content/first-datas";
import Button from "../../../component/Button/Button";

const FirstContent = () => {
  return (
    <div>
      <div className="firsttitle">our proposals</div>
      <Text firstName="our" lastName="destinations" className="secondtitle" />
      <div className="grid-container">
        {firstdatasproduct &&
          firstdatasproduct.map((item, index) => {
            return (
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className="box-firstproduct"
                key={index}
              >
                <img src={item.icon} alt="" className="icon-firstproduct" />
                <div className="box-firstproduct-des">
                  <div className="name-local">{item.name}</div>
                  <div className="packages-local">{item.packages}</div>
                </div>
                <div className="box-firstproduct-hover">
                  packages
                  <p className="local-hover">{item.localhover}</p>
                  <Button name="view destination" className="btn-view" />
                </div>
              </div>
            );
          })}
      </div>
      <div className="content-firstbanner">
        <Text
          className="banner-text"
          firstName="your Next"
          lastName="holiday"
        />
        <Button
          className="banner-button"
          name="view all backages" />
      </div>
    </div>
  );
};

export default FirstContent;
