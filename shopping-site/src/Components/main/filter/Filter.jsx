import "./Filter.css";
import React from "react";
export default function Filter() {
  return (
    <div className="filter-cart-container">
      <div className="filter-container">
        <p>6 Products</p>
        <div>
          <label for="order-list">Order</label>
          <select name="order" id="order-list">
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
      <div className="cart">
        <p>Cart is Empty</p>
      </div>
    </div>
  );
}
