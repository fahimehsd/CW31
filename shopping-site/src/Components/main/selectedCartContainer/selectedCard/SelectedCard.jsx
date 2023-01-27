import React from "react";
import Button from "../../../button/Button";
import "./SelectedCard.css";

const SelectedCard = ({ img, title, price, id, onRemoveFromContainer }) => {
  const remove = () => {
    onRemoveFromContainer(id);
  };
  return (
    <div className="selected-card">
      <img src={img} alt="image" className="selected-card-img" />
      <div className="selected-card-info">
        <p className="selected-card-title">{title}</p>
        <div className="selected-card-price-remove-btn">
          <p className="selected-card-price">$ {price}</p>
          <Button
            text="remove"
            bgColor="#d3d3d3"
            padding="10px"
            onRemoveFromContainer={remove}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
