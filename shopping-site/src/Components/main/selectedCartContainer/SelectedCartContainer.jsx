import React, { useState } from "react";
import Button from "../../button/Button";
import SelectedCard from "./selectedCard/SelectedCard";
import "./SelectedCartContainer.css";

const SelectedCartContainer = ({ dataList, onRemoveFromContainer }) => {
  let totalPrice = 0;
  let count = 0;
  dataList.forEach((item) => {
    totalPrice += Math.round(Number(item.price));
    count += 1;
  });

  return (
    <div>
      <p className="cart">
        {!count ? "Cart is Empty" : "You have " + count + " in the Cart"}
      </p>
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
