import React, { useState } from "react";
import Card from "./card/Card";
import "./CardContainer.css";

const CardContainer = ({ dataList, onAddToCartContainer }) => {
  const [filtredList, setFiltredList] = useState(dataList);
  const [order, setOrder] = useState("");

  const sortByPrice = (e) => {
    let temp = [];
    let sortedList = [];
    if (e.target.value === "highest") {
      temp = [...filtredList];
      sortedList = temp.sort((a, b) => b.price - a.price);
      setFiltredList(sortedList);
      setOrder("highest");
    }
    if (e.target.value === "lowest") {
      temp = [...filtredList];
      sortedList = temp.sort((a, b) => a.price - b.price);
      setFiltredList(sortedList);
      setOrder("lowest");
    }
  };

  const filteredBySize = (e) => {
    let temp = [];
    let sortedList = [];
    let filtredListBySize = [];
    if (e.target.value === "all") {
      setFiltredList(dataList);
    } else {
      dataList.map((item) => {
        if (item.size.includes(e.target.value)) {
          filtredListBySize.push(item);
        }
      });

      if (order === "highest") {
        temp = [...filtredListBySize];
        sortedList = temp.sort((a, b) => b.price - a.price);
        setFiltredList(sortedList);
      } else {
        temp = [...filtredListBySize];
        sortedList = temp.sort((a, b) => a.price - b.price);
        setFiltredList(sortedList);
      }
    }
  };

  return (
    <div>
      <div className="filter-container">
        <p>6 Products</p>
        <div>
          <label htmlFor="order-list">Order</label>
          <select name="order" id="order-list" onChange={sortByPrice}>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div>
          <label htmlFor="filter-list">Filter</label>
          <select name="filter" id="filter-list" onChange={filteredBySize}>
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
        {/* {console.log("line42", sortByPriceList)} */}
        {filtredList.map((item) => {
          return (
            <Card
              img={item.img}
              title={item.title}
              price={item.price}
              desc={item.desc}
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
