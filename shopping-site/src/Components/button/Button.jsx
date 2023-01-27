import React from "react";
import "./Button.css";
const Button = ({
  text,
  bgColor = "#f0c041",
  padding = "12px 18px",
  onClick,
}) => {
  return (
    <button
      style={{ backgroundColor: bgColor, padding: padding }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
