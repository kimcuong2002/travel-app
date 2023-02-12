import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { productDatas } from "../../utils/ProductDatas";
import "./HeaderMenu.css";
import Text from "../Text-decoration/Text-decoration";
import Product from "../../component/HeaderMenu/Product/Product";

const HeaderMenu = ({ open, onClose, className }) => {
      
  return (
    <div className={`header-menu-container ${className}`}>
      <div className="header-menu-content">
        <div className="title">
          <div className="first-title">best</div>
          <Text lastName="backages" className="second-title" />
        </div>
        <div className="title-product">
          {productDatas &&
            productDatas.map((item, index) => {
              return (
                <Product
                  key={index}
                  image={item.image}
                  nameTravel={item.nameTravel}
                  localTravel={item.localTravel}
                  price={item.price}
                />
              );
            })}
        </div>
      </div>
      <AiOutlineCloseCircle onClick={onClose} className="btn-close" />
    </div>
  );
};

export default HeaderMenu;
