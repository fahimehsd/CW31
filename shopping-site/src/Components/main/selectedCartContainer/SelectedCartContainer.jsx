import React, { useState } from "react";
import Button from "../../button/Button";
import SelectedCard from "./selectedCard/SelectedCard";
import "./SelectedCartContainer.css";

const SelectedCartContainer = ({ dataList, onRemoveFromContainer }) => {
  let totalPrice = 0;
  dataList.forEach((item) => {
    totalPrice += Math.round(Number(item.price));
  });
  return (
    <div>
      <p className="cart">Cart is Empty</p>
      <div className="selected-cards">
        {dataList.map((data) => {
          return (
            <SelectedCard
              img={data.img}
              title={data.title}
              price={data.price}
              key={data.id}
              id={data.id}
              onRemoveFromContainer={onRemoveFromContainer}
            />
          );
        })}
      </div>
      <div className="proceed">
        <p>Total: $ {totalPrice}</p>
        <Button text={"Proceed"} />
      </div>
    </div>
  );
};
export default SelectedCartContainer;
