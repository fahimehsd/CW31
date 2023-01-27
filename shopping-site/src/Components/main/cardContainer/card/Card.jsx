import React, { useState } from "react";
import Button from "../../../button/Button";
import Modal from "../modal/Modal";
import "./Card.css";
const Card = ({ img, title, price, desc, id, onAddToCartContainer }) => {
  const obj = {
    img: img,
    title: title,
    price: price,
    id: id,
  };

  const onAddToCart = () => {
    onAddToCartContainer(obj);
  };

  const [modalDisplay, setModalDisplay] = useState("none");
  const openModal = () => {
    setModalDisplay("flex");
  };

  const closeModal = () => {
    setModalDisplay("none");
  };

  return (
    <div>
      <img className="card-img" src={img} onClick={openModal} />
      <p className="card-title">{title}</p>
      <div className="price-add-to-cart-btn">
        <p className="card-price">$ {price}</p>
        <Button text="Add To Cart" onClick={onAddToCart} />
      </div>
      <Modal
        img={img}
        title={title}
        price={price}
        desc={desc}
        id={id}
        display={modalDisplay}
        onCloseModal={closeModal}
        onAddToCartContainer={onAddToCartContainer}
      />
    </div>
  );
};
export default Card;
