import React from "react";
import Button from "../../../button/Button";
import "./Modal.css";

const Modal = ({
  img,
  title,
  price,
  desc,
  id,
  display,
  onCloseModal,
  onAddToCartContainer,
}) => {
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
    <div className="modal" style={{ display: display }}>
      <img src={img} alt={title} className="modal-img" />
      <div className="modal-info">
        <div className="modal-title">
          <p>{title}</p>
          <button onClick={() => onCloseModal()}>x</button>
        </div>
        <p className="modal-desc">{desc}</p>
        <div className="price-button">
          <p>Price : ${price}</p>
          <Button text="Add To Cart" onClick={onAddToCart} />
        </div>
      </div>
    </div>
  );
};
export default Modal;
