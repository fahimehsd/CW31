import React, { useState } from "react";
import { dataList } from "../../dataList";
import "./Main.css";
import CardContainer from "./cardContainer/CardContainer";
import SelectedCartContainer from "./selectedCartContainer/SelectedCartContainer";

export default function Main() {
  const [selectedCard, setSelectedCard] = useState([]);

  const addToCartContainer = (card) => {
    setSelectedCard((prevList) => {
      const existCard = prevList.find((item) => item.id === card.id);
      if (existCard) {
        return [...prevList];
      } else {
        return [...prevList, card];
      }
    });
  };

  const removeFromContainer = (id) => {
    const newList = selectedCard.filter((item) => item.id !== id);
    setSelectedCard(newList);
  };

  return (
    <main>
      <CardContainer
        dataList={dataList}
        onAddToCartContainer={addToCartContainer}
      />
      <SelectedCartContainer
        dataList={selectedCard}
        onRemoveFromContainer={removeFromContainer}
      />
    </main>
  );
}
