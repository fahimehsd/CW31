import React from "react";
import "./Button.css";
const Button = ({
  text,
  bgColor = "#f0c041",
  padding = "12px 18px",
  onAddToCart,
  onRemoveFromContainer,
}) => {
  const buttonHandler = (e) => {
    if (e.target.innerText === "Add To Cart") {
      onAddToCart();
    }
    if (e.target.innerText === "remove") {
      onRemoveFromContainer();
    }
  };

  return (
    <button
      style={{ backgroundColor: bgColor, padding: padding }}
      onClick={buttonHandler}
    >
      {text}
    </button>
  );
};
export default Button;
