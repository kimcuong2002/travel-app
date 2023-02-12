import React from "react";
import "./Product.css";
import Button from "../../Button/Button";

const Product = ({ nameTravel, localTravel, price, className, image }) => {
  return (
    <div className={`product-container ${className}`}>
      <img src={image} alt="" className="travel-img-demo" />
      <div className="product-title">
          <div className="nameTravel">{nameTravel}</div>
          <div className="localTravel">{localTravel}</div>
        <Button name={price} className="btn-header-menu" />
      </div>
    </div>
  );
};

export default Product;
