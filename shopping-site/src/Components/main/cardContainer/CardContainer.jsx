import React, { useState } from "react";
import Card from "./card/Card";
import "./CardContainer.css";

const CardContainer = ({ dataList, onAddToCartContainer }) => {
  const [sortByPriceList, setsortByPriceList] = useState(dataList);

  const sortByPrice = (e) => {
    if (e.target.value === "highest") {
      console.log(e.target.value);
      let test = sortByPriceList.sort((a, b) => a.price - b.price);
      setsortByPriceList(test);
      console.log(sortByPriceList);
    } else {
      setsortByPriceList(sortByPriceList.sort((a, b) => b.price - a.price));
    }
  };
  return (
    <div>
      <div className="filter-container">
        <p>6 Products</p>
        <div>
          <label for="order-list">Order</label>
          <select name="order" id="order-list" onChange={sortByPrice}>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div>
          <label for="filter-list">Filter</label>
          <select name="filter" id="filter-list">
            <option value="all">All</option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
          </select>
        </div>
      </div>
      <div className="card-container">
        {dataList.map((item) => {
          return (
            <Card
              img={item.img}
              title={item.title}
              price={item.price}
              key={item.id}
              id={item.id}
              onAddToCartContainer={onAddToCartContainer}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardContainer;
