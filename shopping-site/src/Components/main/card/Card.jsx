import React from "react";
import Button from "../../button/Button";
import "./Card.css";
const Card = ({ img, title, price }) => {
  return (
    <div>
      <img src={img} />
      <p className="card-title">{title}</p>
      <div className="price-add-to-cart-btn">
        <p className="card-price">{price}</p>
        <Button text="Add To Cart" />
      </div>
    </div>
  );
};
export default Card;
