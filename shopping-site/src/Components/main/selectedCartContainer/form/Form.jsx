import React, { useState } from "react";
import "./Form.css";

const Form = ({ displayForm, dataList }) => {
  const [entredEmail, setEntredEmail] = useState("");
  const [entredName, setEntredName] = useState("");
  const [entredAddress, setEntredAddress] = useState("");

  const emailChangeHandler = (e) => {
    setEntredEmail(e.target.value);
  };

  const nameChangeHandler = (e) => {
    setEntredName(e.target.value);
  };

  const addressChangeHandler = (e) => {
    setEntredAddress(e.target.value);
  };

  const checkoutHandler = (e) => {
    e.preventDefault();
    const outputDate = [
      { dataList: dataList },
      {
        userInput: {
          email: entredEmail,
          name: entredName,
          address: entredAddress,
        },
      },
    ];
    console.log(outputDate);

    setEntredEmail("");
    setEntredName("");
    setEntredAddress("");
  };

  return (
    <form
      className="user-form"
      style={{ display: displayForm }}
      onSubmit={checkoutHandler}
    >
      <div className="inputs">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          value={entredEmail}
        />
      </div>
      <div className="inputs">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={entredName}
        />
      </div>
      <div className="inputs">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          onChange={addressChangeHandler}
          value={entredAddress}
        />
      </div>
      <button type="submit">Checkout</button>
    </form>
  );
};
export default Form;
