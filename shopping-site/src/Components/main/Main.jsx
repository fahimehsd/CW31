import Filter from "./filter/Filter";
import Card from "./card/Card";
import { dataList } from "../../dataList";
import React from "react";
import "./Main.css";
export default function Main() {
  return (
    <main>
      <Filter />
      <div className="card-order">
        <div className="card-container">
          {dataList.map((item) => {
            return (
              <Card
                img={item.img}
                title={item.title}
                price={item.price}
                key={item.id}
              />
            );
          })}
        </div>
        <div>hello</div>
      </div>
    </main>
  );
}
