import React from "react";
import Button from "../../../button/Button";
import "./Card.css";
const Card = ({ img, title, price, id, onAddToCartContainer }) => {
  const obj = {
    img: img,
    title: title,
    price: price,
    id: id,
  };

  const onAddToCart = () => {
    onAddToCartContainer(obj);
  };

  return (
    <div>
      <img className="card-img" src={img} />
      <p className="card-title">{title}</p>
      <div className="price-add-to-cart-btn">
        <p className="card-price">$ {price}</p>
        <Button text="Add To Cart" onAddToCart={onAddToCart} />
      </div>
    </div>
  );
};
export default Card;
